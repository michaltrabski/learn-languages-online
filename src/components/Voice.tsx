import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "../redux/store/store";
import { useAudio } from "../hooks/useAudio";
import { changeAudioState } from "../redux/actions/voiceAction";

export default function Voice() {
  const { voice } = useSelector((state: RootStoreType) => state);
  const { url, slug, playVoice, pauseVoice } = useSelector(
    (state: RootStoreType) => state.voice
  );
  const { audioElement, audioState, controls } = useAudio(`${url}${slug}.mp3`);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(changeAudioState(audioState));
    // setTimeout(() => {
    //   controls.pause();
    // }, 600);
  }, [audioState]);

  // PLAY VOICE
  useEffect(() => {
    if (playVoice) controls.play();
  }, [playVoice]);

  // PAUSE VOICE
  useEffect(() => {
    if (pauseVoice) controls.pause();
  }, [pauseVoice]);

  return (
    <div>
      {/* <pre>{JSON.stringify(voice, null, 3)}</pre> */}
      {audioElement}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  })
);
