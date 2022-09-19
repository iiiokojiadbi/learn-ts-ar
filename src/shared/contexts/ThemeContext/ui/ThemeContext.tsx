import { createContext } from 'react';
import { FC, PropsWithChildren, useMemo, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'app_theme';


export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


export const Context = createContext<ThemeContextProps>({});

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return <Context.Provider value={defaultProps}>
    {children}
  </Context.Provider>
}