import { Dispatch } from "redux";
import { AudioState } from "../reducers/voiceReducer";
export const CHANGE_VOICE = "CHANGE_VOICE";
export const CHANGE_AUDIO_STATE = "CHANGE_AUDIO_STATE";
export const PLAY_VOICE = "PLAY_VOICE";
export const PAUSE_VOICE = "PAUSE_VOICE";

interface PlayVoice {
  type: typeof PLAY_VOICE;
}

interface ChangeVoice {
  type: typeof CHANGE_VOICE;
  slug: string;
}

interface ChangeAudioState {
  type: typeof CHANGE_AUDIO_STATE;
  payload: {
    slug: string;
    audioState: AudioState;
  };
}

export type VoiceDispatchTypes = ChangeVoice | ChangeAudioState | PlayVoice;

export const playVoice = () => async (dispatch: Dispatch<PlayVoice>) => {
  dispatch({ type: PLAY_VOICE });
};

export const changeVoice =
  (slug: string) => async (dispatch: Dispatch<ChangeVoice>) => {
    dispatch({ type: CHANGE_VOICE, slug });
    // dispatch({ type: CHANGE_VOICE, slug: "" });
    // setTimeout(() => {
    //   dispatch({ type: CHANGE_VOICE, slug });
    // }, 111);
  };

export const changeAudioState =
  (slug: string, audioState: AudioState) =>
  async (dispatch: Dispatch<ChangeAudioState>) => {
    dispatch({ type: CHANGE_AUDIO_STATE, payload: { slug, audioState } });
  };

// export const changeAudioState =
//   (audioState: any) => async (dispatch: Dispatch<any>) => {
//     dispatch({ type: CHANGE_AUDIO_STATE, payload: { audioState } });
//   };

// export const playVoice = () => async (dispatch: Dispatch<any>) => {
//   dispatch({ type: PLAY_VOICE });
// };

// export const pauseVoice = () => async (dispatch: Dispatch<any>) => {
//   dispatch({ type: PAUSE_VOICE });
// };
