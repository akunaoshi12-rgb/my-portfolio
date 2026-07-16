import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { copy } from '../i18n';
import { CVModal } from './CVModal';

interface MotionProps extends HTMLAttributes<HTMLElement> {
  animate?: unknown;
  exit?: unknown;
  initial?: unknown;
  transition?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
}

const removeMotionProps = (props: MotionProps) => {
  const domProps = { ...props };
  delete domProps.animate;
  delete domProps.exit;
  delete domProps.initial;
  delete domProps.transition;
  delete domProps.whileHover;
  delete domProps.whileTap;
  return domProps;
};

vi.mock('motion/react', () => ({
  AnimatePresence: ({ children }: { children: ReactNode }) => children,
  motion: {
    div: forwardRef<HTMLDivElement, MotionProps>((props, ref) => (
      <div ref={ref} {...removeMotionProps(props)} />
    )),
    button: forwardRef<HTMLButtonElement, MotionProps>((props, ref) => (
      <button ref={ref} {...removeMotionProps(props)} />
    )),
  },
}));

function ModalHarness() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Buka CV
      </button>
      <CVModal
        isOpen={isOpen}
        isDark
        copy={copy.id}
        onClose={() => setIsOpen(false)}
        onPrint={() => window.print()}
      />
    </>
  );
}

describe('CVModal', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'print', {
      configurable: true,
      value: vi.fn(),
    });
  });

  it('moves focus to the close button and restores it after Escape', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);
    const opener = screen.getByRole('button', { name: 'Buka CV' });

    await user.click(opener);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: copy.id.closeCv })).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(opener).toHaveFocus();
  });

  it('calls the browser print function', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole('button', { name: 'Buka CV' }));
    await user.click(screen.getByRole('button', { name: copy.id.printPdf }));

    expect(window.print).toHaveBeenCalledOnce();
  });
});
