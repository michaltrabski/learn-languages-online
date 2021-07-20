import { CHANGE_VOICE } from "../actions/voiceAction";

interface State {
  url: string; // this is a full url to folder where mp3 file are on server
  slug: string; // this is a mp3 file nama without .mp3
}

const initialState: State = {
  url: "https://poznaj-testy.hekko24.pl/learn-languages-online/",
  slug: "",
};

const voiceReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case CHANGE_VOICE:
      state = {
        ...state,
        slug: action.payload.slug,
      };
      return state;
    default:
      return state;
  }
};

export default voiceReducer;
