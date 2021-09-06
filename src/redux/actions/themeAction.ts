export const SET_THEME = "SET_THEME";

export type MyTheme = "light" | "dark";

interface SetTheme {
  type: typeof SET_THEME;
  myTheme: MyTheme;
}

export type ThemeDispatchTypes = SetTheme;

export const setTheme = (myTheme: MyTheme): SetTheme => ({
  type: SET_THEME,
  myTheme,
});
