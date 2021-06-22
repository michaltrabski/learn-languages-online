import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import text1 from "../data/text1.json";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteTwoToneIcon from "@material-ui/icons/PlayCircleFilledWhiteTwoTone";
import PlayM from "./PlayButton";
import TableM from "./TableM";

const lang = "pl";

export default function Text() {
  const classes = useStyles();

  const [text, setText] = useState(text1);
  const { title, titleTranslation, content, contentTranslation, sentences } =
    text;

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h1" gutterBottom align="left">
        <PlayM />
        {title}
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom align="left">
        <PlayM />
        {titleTranslation[lang]}
      </Typography>

      <Typography variant="body1" gutterBottom align="left">
        <PlayM />
        {content}
      </Typography>
      <Typography variant="body1" gutterBottom align="left">
        <PlayM />
        {contentTranslation[lang]}
      </Typography>

      <TableM />
      {sentences.map((sentence) => (
        <Typography variant="subtitle1" gutterBottom align="left">
          <PlayM />
          {sentence}
        </Typography>
      ))}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});
