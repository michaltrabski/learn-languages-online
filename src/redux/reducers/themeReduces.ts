import { darkTheme, lightTheme } from "../../theme/theme";

interface State {
  theme: typeof lightTheme;
}

const initialTheme: State = {
  theme: lightTheme,
};

const themeReducer = (state: State = initialTheme, action: any): State => {
  switch (action.type) {
    case "TOOGLE_THEME":
      state = {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
      return state;
    default:
      return state;
  }
};

export default themeReducer;
