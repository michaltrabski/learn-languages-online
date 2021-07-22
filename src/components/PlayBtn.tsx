import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useDispatch } from "react-redux";
import { ChangeVoice } from "../redux/actions/voiceAction";
import AddIcon from "@material-ui/icons/Add";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0.5),
      "& > *": {
        // marginBottom: theme.spacing(0),
      },
      // "& > span > svg": {
      //   // color: "red",
      //   width: "2.0em",
      //   height: "2.0em",
      // },
    },
    normal: {
      "& > span > svg": {
        // color: "blue",
        width: "2.0em",
        height: "2.0em",
      },
    },
    small: {
      "& > span > svg": {
        // color: "red",
        width: "1.5em",
        height: "1.5em",
      },
    },
  })
);

interface Props {
  slug?: string | null | undefined;
  color?: "primary" | "secondary";
  size?: "small" | "normal";
}

export default function PlayBtn(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const size = props.size || "normal";
  console.log(size);

  const play = (slug: string | null | undefined) => {
    console.log(slug);
    if (slug) dispatch(ChangeVoice(slug));
  };
  return (
    <>
      <IconButton
        className={clsx(classes.root, classes[size])}
        color={props?.color ? props.color : "primary"}
        aria-label="upload picture"
        component="span"
        disabled={props.slug ? false : true}
        onClick={() => play(props.slug)}
      >
        <PlayCircleOutlineIcon />
      </IconButton>
      <IconButton
        className={clsx(classes.root, classes["small"])}
        color="secondary"
        aria-label="upload picture"
        component="span"
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </>
  );
}
