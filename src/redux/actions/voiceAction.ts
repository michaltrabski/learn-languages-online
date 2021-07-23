import { Dispatch } from "redux";
export const CHANGE_VOICE = "CHANGE_VOICE";
export const CHANGE_AUDIO_STATE = "CHANGE_AUDIO_STATE";
export const PLAY_VOICE = "PLAY_VOICE";
export const PAUSE_VOICE = "PAUSE_VOICE";

export const ChangeVoice =
  (slug: string) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: CHANGE_VOICE, payload: { slug } });
  };

export const changeAudioState =
  (audioState: any) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: CHANGE_AUDIO_STATE, payload: { audioState } });
  };

export const playVoice = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: PLAY_VOICE });
};

export const pauseVoice = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: PAUSE_VOICE });
};
