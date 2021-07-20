import { Dispatch } from "redux";
export const CHANGE_VOICE = "CHANGE_VOICE";

// export type VoiceType = { url: string };

export const ChangeVoice =
  (slug: string) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: CHANGE_VOICE, payload: { slug } });
  };
