import { ENDPOINT } from "../../settings/settings";
import {
  CHANGE_AUDIO_STATE,
  CHANGE_VOICE,
  PAUSE_VOICE,
  PLAY_VOICE,
  VoiceDispatchTypes,
} from "../actions/voiceActions";

export interface AudioState {
  playing: boolean;
  ended: boolean;
  waiting: boolean;
  pause: boolean;
  duration: number;
}

interface State {
  path: string; // this is a full url to folder where mp3 file are on server
  slug: string; // this is a mp3 file name without .mp3
  audioState: AudioState;
  playVoice: boolean;
  pauseVoice: boolean;
}

export const initialAudioState: AudioState = {
  playing: false,
  ended: false,
  waiting: false,
  pause: false,
  duration: 0,
};
const initialState: State = {
  path: ENDPOINT,
  slug: "",
  audioState: initialAudioState,
  playVoice: false,
  pauseVoice: false,
};

const voiceReducer = (
  state: State = initialState,
  action: VoiceDispatchTypes
): State => {
  switch (action.type) {
    case CHANGE_VOICE:
      console.log("CHANGE_VOICE action =>", action);
      state = {
        ...state,
        slug: action.slug,
      };
      return state;
    case CHANGE_AUDIO_STATE:
      console.log("CHANGE_AUDIO_STATE action =>", action);
      const { slug, audioState } = action.payload;
      state = {
        ...state,
        slug,
        audioState,
      };
      return state;
    case PLAY_VOICE:
      console.log("PLAY_VOICE action =>", action);
      state = {
        ...state,
        playVoice: true,
        pauseVoice: false,
      };
      return state;
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
