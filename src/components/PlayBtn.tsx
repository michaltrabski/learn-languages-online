import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

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

export default function PlayBtn() {
  const classes = useStyles();

  return (
    // <Button
    //   variant="contained"
    //   color="primary"
    //   component="span"
    //   startIcon={<PlayCircleOutlineIcon />}
    //   size="small"
    // ></Button>
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      size="small"
    >
      <PlayCircleOutlineIcon />
    </IconButton>
  );
}

{
  /* <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PlayCircleOutlineIcon />
        </IconButton> */
}
