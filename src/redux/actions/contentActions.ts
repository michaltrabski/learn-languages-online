import { ShowExampleWordsType } from "../reducers/contentReducer";

export const SHOW_EXAMPLE_WORDS = "SHOW_EXAMPLE_WORDS";

interface ShowExampleWords {
  type: typeof SHOW_EXAMPLE_WORDS;
  showExampleWords: ShowExampleWordsType;
}

export type ContentDispatchTypes = ShowExampleWords;

export const showExampleWords = (showExampleWords: ShowExampleWordsType) => ({
  type: SHOW_EXAMPLE_WORDS,
  showExampleWords,
});
