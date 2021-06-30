import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    common: { black: red[500] },
    // primary: {
    //   light: "#757ce8",
    //   main: "#3f50b5",
    //   dark: "#002884",
    //   contrastText: "#fff",
    // },
    // secondary: {
    //   light: "#ff7961",
    //   main: "#f44336",
    //   dark: "#ba000d",
    //   contrastText: "#000",
    // },
  },
});
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",

    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});
