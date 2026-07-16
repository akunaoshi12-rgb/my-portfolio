import type { Language } from './i18n';

export type Theme = 'dark' | 'light';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';
export const THEME_STORAGE_KEY = 'portfolio-theme';

const getStoredValue = (key: string): string | null => {
  if (typeof window === 'undefined') return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const getInitialLanguage = (): Language => {
  const storedLanguage = getStoredValue(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'en' || storedLanguage === 'id' ? storedLanguage : 'id';
};

export const getInitialTheme = (): Theme => {
  const storedTheme = getStoredValue(THEME_STORAGE_KEY);

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'dark';
};

export const savePreference = (key: string, value: string): void => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable in privacy mode. The UI still works for the session.
  }
};
