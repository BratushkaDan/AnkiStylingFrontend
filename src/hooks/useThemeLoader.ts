import { useLayoutEffect, useCallback } from 'react';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export function useSyncTheme() {
  useLayoutEffect(() => {
    const theme = window.localStorage.getItem('application-theme') || Themes.DARK;
    const html = document.querySelector('html');
    if (html === null) {
      return;
    }
    html.dataset.theme = theme;
  }, []);
}

export function useThemeSwitcher() {
  return useCallback(() => {
    const oldTheme = window.localStorage.getItem('application-theme') || Themes.DARK;
    const newTheme = oldTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    
    const html = document.querySelector('html');
    if (html === null) {
      return;
    }
    window.localStorage.setItem('application-theme', newTheme)
    html.dataset.theme = newTheme;
  }, []);
}
