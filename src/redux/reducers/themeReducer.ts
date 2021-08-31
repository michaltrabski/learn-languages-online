import { darkTheme, lightTheme, theme } from "../../theme/theme";
import { ThemeDispatchTypes } from "../actions/themeAction";

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
    case "TOOGLE_THEME":
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
