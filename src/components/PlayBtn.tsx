import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { ChangeVoice } from "../redux/actions/voiceAction";
import AddIcon from "@material-ui/icons/Add";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { RootStoreType } from "../redux/store/store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0),
      marginRight: theme.spacing(0.25),
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
        width: "2.0em",
        height: "2.0em",
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

  const { slug, audioState } = useSelector(
    (state: RootStoreType) => state.voice
  );
  const dispatch = useDispatch();

  const size = props.size || "normal";
  console.log(size);

  const play = (slug: string | null | undefined) => {
    console.log(slug);
    if (slug) dispatch(ChangeVoice(slug));
  };

  return (
    <>
      {/* <pre>{JSON.stringify(slug, null, 3)}</pre> */}

      <IconButton
        className={clsx(classes.root, classes["small"])}
        color="secondary"
        aria-label="upload picture"
        component="span"
      >
        <AddCircleOutlineIcon />
      </IconButton>
      {audioState.playing && slug === props.slug ? (
        <>
          <br />
          {slug}
          <br />
          {props.slug}
        </>
      ) : (
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
      )}
    </>
  );
}
