import * as React from "react";
import { useSelector } from "react-redux";
import { useAudio } from "../hooks/useAudio";
import { RootStoreType } from "../redux/store/store";

export interface VoiceProps {}

const Voice = (props: VoiceProps) => {
  const { path, slug } = useSelector((state: RootStoreType) => state.voice);
  const { source_lang } = useSelector((state: RootStoreType) => state.lang);

  const url = `${path}mp3/${source_lang}/${slug}.mp3`;
  const { audioElement, audioState, setAudioState, controls } = useAudio(url);

  return (
    <>
      {/* <pre>{JSON.stringify(url, null, 2)}</pre> */}
      {audioElement}
    </>
  );
};

export default Voice;
