import { darkTheme, lightTheme, theme } from "../../theme/theme";
import { ThemeDispatchTypes } from "../actions/themeAction";

interface ExampleForWord {
  example: string;
  PL?: string;
}

export interface Word {
  word: string;
  count: number;
  examplesForWord: ExampleForWord[];
  PL?: string;
}

interface ContentState {
  currentPage: number;
  howManyPages: number;
  words: Word[];
}

const initialState: ContentState = {
  currentPage: 111,
  howManyPages: 444,
  words: [
    {
      word: "the",
      count: 157,
      examplesForWord: [
        { example: "Change the bulb.", PL: "Wymienić żarówkę." },
      ],
      PL: "słowko the",
    },
    {
      word: "chair",
      count: 157,
      examplesForWord: [
        { example: "Change the bulb.", PL: "Wymienić żarówkę." },
      ],
      PL: "krzesło",
    },
  ],
};

const contentReducer = (
  state: ContentState = initialState,
  action: ThemeDispatchTypes
): ContentState => {
  switch (action.type) {
    // case "TOOGLE_THEME":
    //   state = {
    //     ...state,

    //   };
    //   return state;
    default:
      return state;
  }
};

export default contentReducer;
