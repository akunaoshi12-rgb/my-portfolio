import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getInitialLanguage,
  getInitialTheme,
  LANGUAGE_STORAGE_KEY,
  savePreference,
  THEME_STORAGE_KEY,
} from './preferences';

describe('portfolio preferences', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.restoreAllMocks();
  });

  it('uses Indonesian when no language preference is stored', () => {
    expect(getInitialLanguage()).toBe('id');
  });

  it('restores a saved language preference', () => {
    savePreference(LANGUAGE_STORAGE_KEY, 'en');

    expect(getInitialLanguage()).toBe('en');
  });

  it('ignores an invalid language preference', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'unknown');

    expect(getInitialLanguage()).toBe('id');
  });

  it('keeps working when browser storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage unavailable');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage unavailable');
    });

    expect(getInitialLanguage()).toBe('id');
    expect(() => savePreference(LANGUAGE_STORAGE_KEY, 'en')).not.toThrow();
  });

  it('restores a saved theme before checking the system preference', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light');
    const matchMedia = vi.fn();
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: matchMedia,
    });

    expect(getInitialTheme()).toBe('light');
    expect(matchMedia).not.toHaveBeenCalled();
  });

  it('uses the system theme when the stored value is invalid', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'unknown');
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });

    expect(getInitialTheme()).toBe('dark');
  });
});
