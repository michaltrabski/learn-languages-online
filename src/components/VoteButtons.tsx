import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        // margin: theme.spacing(0),
      },
    },
  })
);

export default function VoteButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth>
            Znam to słowo
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" fullWidth>
            Nie znam słowa
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
