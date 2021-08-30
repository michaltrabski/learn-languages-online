export const TOOGLE_THEME = "TOOGLE_THEME";

interface ToogleTheme {
  type: typeof TOOGLE_THEME;
}

export type ThemeDispatchTypes = ToogleTheme;

export const ChangeTheme = () => ({});
