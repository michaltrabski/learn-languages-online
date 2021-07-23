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

export default function Voice() {
  const { url, slug } = useSelector((state: RootStoreType) => state.voice);
  const { audioElement, audioState } = useAudio(`${url}${slug}.mp3`);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(changeAudioState(audioState));
  }, [audioState]);

  return (
    <div>
      VOICE = {url}
      {slug}.mp3
      <br />
      <pre>{JSON.stringify(audioState, null, 3)}</pre>
      {audioElement}
    </div>
  );
}
