import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PlayBtn from "./PlayBtn";
import TranslateIcon from "@material-ui/icons/Translate";
import { IconButton } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { color: theme.palette.text.secondary },
    pointer: { cursor: "pointer" },
  })
);

interface Props {
  translatedText: string | null | undefined;
  showImmediately?: boolean;
}
const Translation = (props: Props) => {
  const classes = useStyles();

  const [show, setShow] = useState(props.showImmediately ? true : false);
  return (
    <span className={classes.root} onClick={() => setShow(true)}>
      {show ? (
        <>
          <span> - </span>
          {/* <ArrowRightAltIcon /> */}
          <span>
            {/* <PlayBtn /> */}
            {props.translatedText}
          </span>
        </>
      ) : (
        <>
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
            size="small"
          >
            <TranslateIcon />
          </IconButton>
          {/* <span className={classes.pointer}>pokaż tłumaczenie</span> */}
        </>
      )}
    </span>
  );
};

export default Translation;
