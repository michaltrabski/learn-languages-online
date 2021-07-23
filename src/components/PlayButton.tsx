import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteTwoToneIcon from "@material-ui/icons/PlayCircleFilledWhiteTwoTone";
import { useEffect } from "react";
import axios from "axios";
import { useAudio } from "../hooks/useAudio";

interface Props {
  play: (slug: string) => void;
  changeSound: (slug: string) => void;
  slug: string;
}
export default function PlayButton(props: Props) {
  const classes = useStyles();
  const { audioElement, controls } = useAudio(
    "http://localhost:3000/static/media/horse.f06ef58b.mp3"
  );

  useEffect(() => {
    // axios.get("https://www.w3schools.com/html/horse.mp3");
    //https://www.w3schools.com/html/horse.mp3
    // console.log("xxxxxxx");
  }, []);

  const { play, changeSound, slug } = props;

  return (
    <>
      {/* <IconButton
        className={classes.root}
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={() => changeSound(slug)}
      >
        <PlayCircleFilledWhiteTwoToneIcon />
      </IconButton> */}
    </>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 0,
    transform: "translateY(-2px)",
  },
});
