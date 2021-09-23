import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudio } from "../hooks/useAudio";
import { changeAudioState } from "../redux/actions/voiceActions";
import { RootStoreType } from "../redux/store/store";

export interface VoiceProps {}

const Voice = (props: VoiceProps) => {
  const { path, slug, audioState, playVoice } = useSelector(
    (state: RootStoreType) => state.voice
  );
  const { voice } = useSelector((state: RootStoreType) => state);
  const { source_lang } = useSelector((state: RootStoreType) => state.lang);
  const dispatch = useDispatch();

  const {
    audioElement,
    audioState: newAudioState,
    controls,
  } = useAudio(path, slug, source_lang);

  useEffect(() => {
    dispatch(changeAudioState(slug, newAudioState));
  }, [slug, newAudioState, dispatch]);

  useEffect(() => {
    if (playVoice) controls.play();
  }, [playVoice]);

  return (
    <>
      <pre>{JSON.stringify(slug, null, 2)}</pre>
      <pre>{JSON.stringify(voice, null, 2)}</pre>

      {audioElement}
    </>
  );
};

export default Voice;
