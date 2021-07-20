import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { useDispatch } from "react-redux";
import { ChangeVoice } from "../redux/actions/voiceAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0.5),
      "& > *": {
        // marginBottom: theme.spacing(0),
      },
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
}

export default function PlayBtn(props: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const play = (slug: string | null | undefined) => {
    console.log(slug);
    if (slug) dispatch(ChangeVoice(slug));
  };
  return (
    <IconButton
      className={classes.root}
      color={props?.color ? props.color : "primary"}
      aria-label="upload picture"
      component="span"
      disabled={props.slug ? false : true}
      onClick={() => play(props.slug)}
    >
      <PlayCircleOutlineIcon />
    </IconButton>
  );
}
