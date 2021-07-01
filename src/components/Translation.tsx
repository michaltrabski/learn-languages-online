import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PlayBtn from "./PlayBtn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { color: theme.palette.text.secondary },
    pointer: { cursor: "pointer" },
  })
);

const Translation = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  return (
    <span className={classes.root} onClick={() => setShow(true)}>
      {" "}
      {show ? (
        <span>
          <PlayBtn />
          To jest tłumaczenie
        </span>
      ) : (
        <span className={classes.pointer}>tłumaczenie</span>
      )}
    </span>
  );
};

export default Translation;
