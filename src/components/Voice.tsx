import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useSelector } from "react-redux";
import { RootStoreType } from "../redux/store/store";
import { useAudio } from "../hooks/useAudio";

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
  const { audioElement, controls } = useAudio(`${url}${slug}.mp3`);

  const classes = useStyles();

  return (
    <div>
      {/* VOICE = {`${url}${slug}.mp3`}
      <br /> */}
      {audioElement}
    </div>
  );
}
