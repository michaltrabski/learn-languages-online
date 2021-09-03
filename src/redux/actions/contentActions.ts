import axios from "axios";
import { Dispatch } from "redux";
import { ENDPOINT } from "../../settings/settings";
import { ContentState, ShowExampleWordsType } from "../reducers/contentReducer";

export const SHOW_EXAMPLE_WORDS = "SHOW_EXAMPLE_WORDS";
export const LOADING_CONTENT_SUCCESS = "LOADING_CONTENT_SUCCESS";

interface ShowExampleWords {
  type: typeof SHOW_EXAMPLE_WORDS;
  showExampleWords: ShowExampleWordsType;
}

interface LoadingContentSuccess {
  type: typeof LOADING_CONTENT_SUCCESS;
  content: ContentState;
}

type LoadingContent = LoadingContentSuccess;

export type ContentDispatchTypes = ShowExampleWords | LoadingContent;

export const showExampleWords = (showExampleWords: ShowExampleWordsType) => ({
  type: SHOW_EXAMPLE_WORDS,
  showExampleWords,
});

export const loadContent = () => async (dispatch: Dispatch<LoadingContent>) => {
  try {
    const url = `${ENDPOINT}?slug=content-EN-PL-1`;
    const res = await axios.get<ContentState>(url);
    dispatch({ type: LOADING_CONTENT_SUCCESS, content: res.data });
  } catch (err) {
    console.log(89503845, "contentActions.ts", err);
  }
};
