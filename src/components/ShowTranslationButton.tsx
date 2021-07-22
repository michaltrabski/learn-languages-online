import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TranslateIcon from "@material-ui/icons/Translate";
import { useEffect } from "react";
import axios from "axios";
import { useAudio } from "../hooks/useAudio";

interface Props {
  slug: string;
  loadDetail: (slug: string) => void;
}
export default function ShowTranslationButton(props: Props) {
  const classes = useStyles();

  return (
    <>
      <IconButton
        className={classes.root}
        color="secondary"
        aria-label="upload picture"
        component="span"
        onClick={() => props.loadDetail(props.slug)}
      >
        <TranslateIcon />
      </IconButton>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    // padding: 0,
    transform: "translateY(-2px)",
  },
});
