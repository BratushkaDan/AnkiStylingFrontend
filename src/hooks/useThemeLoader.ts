import { useLayoutEffect, useCallback, useState } from 'react';

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
  let [theme, setTheme] = useState((window.localStorage.getItem('application-theme') as Themes) || Themes.DARK);
  return [
    theme,
    useCallback(() => {
      const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
      
      const html = document.querySelector('html');
      if (html === null) {
        return;
      }
      window.localStorage.setItem('application-theme', newTheme);
      setTheme(newTheme);
      html.dataset.theme = newTheme;
    }, [theme]),
  ] as const;
}
