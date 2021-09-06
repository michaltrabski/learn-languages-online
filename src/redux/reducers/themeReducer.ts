import { darkTheme, lightTheme, theme } from "../../theme/theme";
import { SET_THEME, ThemeDispatchTypes } from "../actions/themeAction";

interface ThemeState {
  themeMode: "light" | "dark";
}

const initialTheme: ThemeState = {
  themeMode: "light",
};

const themeReducer = (
  state: ThemeState = initialTheme,
  action: ThemeDispatchTypes
): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      console.log(9834756, "themeReducer.ts", action);
      state = {
        ...state,
        themeMode: state.themeMode === "light" ? "dark" : "light",
      };
      return state;
    default:
      return state;
  }
};

export default themeReducer;
