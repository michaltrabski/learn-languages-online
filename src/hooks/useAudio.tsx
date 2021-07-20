import { createElement, useEffect, useRef, useState } from "react";
import { slug } from "../utils/utils";

export const useAudio = (url: string) => {
  const [state, setState] = useState({
    ready: false,
    paused: true,
    waiting: false,
    autoplay: false,
    currentTime: 0,
    duration: 0,
    buffered: {
      start: 0,
      end: 0,
    },
  });

  const ref = useRef<HTMLAudioElement | null>(null);

  const audioElement = createElement("audio", {
    src: url,
    ref,
    controls: false,
    onPlay: () => () => {
      console.log("onPlay");
    },
    onPause: () => {
      console.log("onPause");
    },
    onWaiting: () => {
      console.log("onWaiting");
    },
    onPlaying: () => {
      console.log("onPlaying");
    },
    onLoadedData: () => {
      const audio = ref.current;
      if (!audio) return;
    },
    onEnded: () => {
      const audio = ref.current;
      if (!audio) return;
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
    //   setState((s) => ({ ...s, fileNameIndex }));
    // },
  };

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    audio.play();
  }, [url]);

  //   useEffect(() => {
  //     setState((s) => ({ ...s, ready: false }));
  //     if (state.duration > 0) setState((s) => ({ ...s, ready: true }));
  //   }, [src, state.duration]);

  return {
    audioElement,
    state,
    setState,
    controls,
    ready: state.ready,
  };
};
