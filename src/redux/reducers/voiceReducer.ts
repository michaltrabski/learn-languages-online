import {
  CHANGE_AUDIO_STATE,
  CHANGE_VOICE,
  PAUSE_VOICE,
  PLAY_VOICE,
} from "../actions/voiceAction";

interface State {
  url: string; // this is a full url to folder where mp3 file are on server
  slug: string; // this is a mp3 file nama without .mp3
  audioState: any;
  playVoice: boolean;
  pauseVoice: boolean;
}

const initialState: State = {
  url: "https://poznaj-testy.hekko24.pl/learn-languages-online/",
  slug: "",
  audioState: {},
  playVoice: false,
  pauseVoice: false,
};

const voiceReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case CHANGE_VOICE:
      const { slug } = action.payload;
      state = {
        ...state,
        slug,
        pauseVoice: false,
      };
      return state;
    case CHANGE_AUDIO_STATE:
      const { audioState } = action.payload;
      state = {
        ...state,
        audioState,
      };
      return state;
    case PLAY_VOICE:
      state = {
        ...state,
        playVoice: false,
        pauseVoice: false,
      };
      return state;
    case PAUSE_VOICE:
      state = {
        ...state,
        pauseVoice: true,
      };
      return state;
    default:
      return state;
  }
};

export default voiceReducer;
