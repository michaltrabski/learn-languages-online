import { CHANGE_AUDIO_STATE, CHANGE_VOICE } from "../actions/voiceAction";

interface State {
  url: string; // this is a full url to folder where mp3 file are on server
  slug: string; // this is a mp3 file nama without .mp3
  audioState: any;
}

const initialState: State = {
  url: "https://poznaj-testy.hekko24.pl/learn-languages-online/",
  slug: "",
  audioState: {},
};

const voiceReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case CHANGE_VOICE:
      const { slug } = action.payload;
      state = {
        ...state,
        slug,
      };
      return state;
    case CHANGE_AUDIO_STATE:
      const { audioState } = action.payload;
      console.log(11111, audioState);
      state = {
        ...state,
        audioState,
      };
      return state;
    default:
      return state;
  }
};

export default voiceReducer;
