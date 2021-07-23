import { Dispatch } from "redux";
export const CHANGE_VOICE = "CHANGE_VOICE";
export const CHANGE_AUDIO_STATE = "CHANGE_AUDIO_STATE";

// export type VoiceType = { url: string };

export const ChangeVoice =
  (slug: string) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: CHANGE_VOICE, payload: { slug } });
  };

export const changeAudioState =
  (audioState: any) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: CHANGE_AUDIO_STATE, payload: { audioState } });
  };
