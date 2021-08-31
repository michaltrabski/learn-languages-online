import { ThemeDispatchTypes } from "../actions/themeAction";

interface LangState {
  source_lang: "EN";
  target_lang: "PL";
}

const initialLangState: LangState = {
  source_lang: "EN",
  target_lang: "PL",
};

const langReducer = (
  state: LangState = initialLangState,
  action: ThemeDispatchTypes
): LangState => {
  switch (action.type) {
    case "TOOGLE_THEME":
      state = {
        ...state,
      };
      return state;
    default:
      return state;
  }
};

export default langReducer;
