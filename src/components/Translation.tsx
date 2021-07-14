import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PlayBtn from "./PlayBtn";
import TranslateIcon from "@material-ui/icons/Translate";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { color: theme.palette.text.secondary },
    pointer: { cursor: "pointer" },
  })
);

interface Props {
  translatedText: string | null | undefined;
}
const Translation = (props: Props) => {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  return (
    <span className={classes.root} onClick={() => setShow(true)}>
      {" "}
      {show ? (
        <span>
          <PlayBtn />
          {props.translatedText}
        </span>
      ) : (
        <>
          {/* <span className={classes.pointer}>pokaż tłumaczenie</span> */}

          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
            size="small"
          >
            <TranslateIcon />
          </IconButton>
        </>
      )}
    </span>
  );
};

export default Translation;
