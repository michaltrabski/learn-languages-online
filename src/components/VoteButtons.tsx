import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function VoteButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" size="small">
        Znam
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Nie znam
      </Button>
    </div>
  );
}
