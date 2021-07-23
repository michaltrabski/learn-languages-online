import { createElement, useEffect, useRef, useState } from "react";
import { slug } from "../utils/utils";

const defaultAudioState = {
  playing: false,
  ended: false,
  waiting: false,

  duration: 0,
};
export const useAudio = (url: string) => {
  const [audioState, setAudioState] = useState(defaultAudioState);

  const ref = useRef<HTMLAudioElement | null>(null);

  const audioElement = createElement("audio", {
    src: url,
    ref,
    controls: false,
    onPlay: () => () => {
      console.log("onPlay");
      // setAudioState((s) => ({ ...s, onPlay: true }));
    },
    onPause: () => {
      console.log("onPause");
    },
    onWaiting: () => {
      console.log("onWaiting");
      setAudioState((s) => ({ ...s, playing: false, waiting: true }));
    },
    onPlaying: () => {
      console.log("onPlaying");
      setAudioState((s) => ({
        ...s,
        playing: true,
        waiting: false,
        ended: false,
      }));
    },
    onLoadedData: () => {
      const audio = ref.current;
      if (!audio) return;
    },
    onEnded: () => {
      // const audio = ref.current;
      // if (!audio) return;
      console.log("onEnded");
      setAudioState((s) => ({ ...s, playing: false, ended: true }));
    },
    onTimeUpdate: () => {
      const audio = ref.current;
      if (!audio) return;
    },
    onDurationChange: () => {},
    onError: (error) => console.log(error),
  });

  const controls = {
    play: () => {
      const audio = ref.current;
      if (!audio) return;

      audio.currentTime = 0;
      audio.play();
    },
    pause: () => ref?.current?.pause(),
    // seek: (newCurrentTime: number | number[]) => {
    //   const audio = ref.current;
    //   if (!audio) return;

    //   if (newCurrentTime instanceof Array) newCurrentTime = newCurrentTime[0];
    //   audio.currentTime = Math.floor(newCurrentTime) || 0;
    //   audio.play();
    // },
    // changeFile: (fileNameIndex: number) => {
    //   setAudioState((s) => ({ ...s, fileNameIndex }));
    // },
  };

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    audio.play();
  }, [url]);

  //   useEffect(() => {
  //     setAudioState((s) => ({ ...s, ready: false }));
  //     if (state.duration > 0) setAudioState((s) => ({ ...s, ready: true }));
  //   }, [src, state.duration]);

  return {
    audioElement,
    audioState,
    setAudioState,
    controls,
  };
};
