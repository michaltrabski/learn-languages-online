import {
  ContentDispatchTypes,
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

interface ContentState {
  limit: number;
  currentPage: number;
  howManyPages: number;
  words: Word[];
}

const initialState: ContentState = {
  limit: 10,
  currentPage: 111,
  howManyPages: 444,
  words: [
    {
      word: "you",
      count: 154,
      examplesForWord: [
        { example: "Why did you it?", PL: "Dlaczego to zrobiłeś?" },
        { example: "See you tomorrow.", PL: "Do zobaczenia jutro." },
        { example: "Did you throw up?", PL: "Zwymiotowałeś?" },
        { example: "Could you help me?", PL: "Czy mógłbyś mi pomóc?" },
      ],
      PL: "ty",
    },
    {
      word: "to",
      count: 130,
      examplesForWord: [
        { example: "From two to six.", PL: "Od dwóch do sześciu." },
        { example: "Glad to meet you.", PL: "Miło mi cię poznać." },
        { example: "Welcome to London.", PL: "Witamy w Londynie." },
        { example: "Pleased to see you.", PL: "Miło mi cię widzieć." },
      ],
      PL: "do",
    },
    {
      word: "is",
      count: 92,
      examplesForWord: [
        { example: "How much is it?", PL: "Ile to jest?" },
        { example: "Is it pure wool?", PL: "Czy to czysta wełna?" },
        { example: "Is anybody hurt?", PL: "Czy ktoś jest ranny?" },
        { example: "What is your name?", PL: "Jak masz na imię?" },
      ],
      PL: "jest",
    },
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
    default:
      return state;
  }
};

export default contentReducer;
