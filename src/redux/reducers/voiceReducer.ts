import { ENDPOINT } from "../../settings/settings";
import {
  CHANGE_AUDIO_STATE,
  CHANGE_VOICE,
  PAUSE_VOICE,
  PLAY_VOICE,
} from "../actions/voiceActions";

interface State {
  path: string; // this is a full url to folder where mp3 file are on server
  slug: string; // this is a mp3 file name without .mp3
  audioState: any;
  playVoice: boolean;
  pauseVoice: boolean;
}

const initialState: State = {
  path: ENDPOINT,
  slug: "",
  audioState: {},
  playVoice: false,
  pauseVoice: false,
};

const voiceReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case CHANGE_VOICE:
      console.log(1, action);
      state = {
        ...state,
        slug: action.slug,
      };
      return state;
    // case CHANGE_AUDIO_STATE:
    //   const { audioState } = action.payload;
    //   state = {
    //     ...state,
    //     audioState,
    //   };
    //   return state;
    // case PLAY_VOICE:
    //   state = {
    //     ...state,
    //     playVoice: false,
    //     pauseVoice: false,
    //   };
    //   return state;
    // case PAUSE_VOICE:
    //   state = {
    //     ...state,
    //     pauseVoice: true,
    //   };
    //   return state;
    default:
      return state;
  }
};

export default voiceReducer;
