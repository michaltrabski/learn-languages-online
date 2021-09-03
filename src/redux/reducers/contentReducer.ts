import { words } from "lodash";
import {
  ContentDispatchTypes,
  LOADING_CONTENT_SUCCESS,
  SHOW_EXAMPLE_WORDS,
} from "../actions/contentActions";
import { ThemeDispatchTypes } from "../actions/themeAction";

export type ShowExampleWordsType = boolean;

export interface ExampleForWord {
  example: string;
  showExampleWords?: ShowExampleWordsType; // if True then I display each words for this example
  PL?: string; // this is translation to Polish language
}

export interface Word {
  word: string;
  count: number;
  examplesForWord: ExampleForWord[];
  PL?: string;
}

export type currentPage = number;
export interface ContentState {
  limit: number;
  currentPage: currentPage;
  howManyPages: number;
  words: Word[];
}

const initialState: ContentState = {
  limit: 5,
  currentPage: 0,
  howManyPages: 0,
  words: [
    // {
    //   word: "you",
    //   count: 154,
    //   examplesForWord: [
    //     { example: "Why did you it?", PL: "Dlaczego to zrobiłeś?" },
    //   ],
    //   PL: "ty",
    // },
  ],
};

const contentReducer = (
  state: ContentState = initialState,
  action: ContentDispatchTypes
): ContentState => {
  switch (action.type) {
    case SHOW_EXAMPLE_WORDS:
      console.log(1, state, action);

      state = {
        ...state,
        // showExampleWords: action.showExampleWords,
      };
      return state;

    case LOADING_CONTENT_SUCCESS:
      console.log("LOADING_CONTENT_SUCCESS", action.content);
      const { currentPage, words: newWords } = action.content;
      state = {
        ...state,
        currentPage,
        words: [...state.words, ...newWords],
      };
      return state;

    default:
      return state;
  }
};

export default contentReducer;
