import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    over: {
      zIndex: 99999,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            LearnMe
          </Typography>

          <IconButton color="secondary" aria-label="menu">
            <Badge badgeContent={113} color="primary" max={9999}>
              <AddCircleOutlineIcon />
            </Badge>
          </IconButton>

          <IconButton color="secondary" aria-label="menu">
            <Badge badgeContent={4287} color="primary" max={9999}>
              <DeleteIcon />
            </Badge>
          </IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
