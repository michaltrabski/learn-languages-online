import { ThemeDispatchTypes } from "../actions/themeAction";

export type SourceLang = "EN";
export type TargetLang = "PL";

interface LangState {
  source_lang: SourceLang;
  target_lang: TargetLang;
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
