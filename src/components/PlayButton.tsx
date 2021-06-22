import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteTwoToneIcon from "@material-ui/icons/PlayCircleFilledWhiteTwoTone";

export default function PlayButton() {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.root}
      color="primary"
      aria-label="upload picture"
      component="span"
    >
      <PlayCircleFilledWhiteTwoToneIcon />
    </IconButton>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 0,
    transform: "translateY(-2px)",
  },
});
