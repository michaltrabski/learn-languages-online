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
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
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
      color={props?.color ? props.color : "primary"}
      aria-label="upload picture"
      component="span"
      size="small"
      disabled={props.slug ? false : true}
      onClick={() => play(props.slug)}
    >
      <PlayCircleOutlineIcon />
    </IconButton>
  );
}
