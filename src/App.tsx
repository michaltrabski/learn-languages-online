import React, { createElement, useRef } from "react";
import "@fontsource/roboto";

import { useState } from "react";

import WrapperContainer from "./components/WrapperContainer";
import { Box, CssBaseline, Typography } from "@material-ui/core";
import { getSentences, getText, getWords, slug, to } from "./utils/utils";
import { useAudio } from "./hooks/useAudio";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store, { RootStoreType } from "./redux/store/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { darkTheme, lightTheme } from "./theme/theme";
import PlayBtn from "./components/PlayBtn";
import { Button } from "@material-ui/core";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Navbar from "./components/Navbar";
import Voice from "./components/Voice";

function App() {
  const { theme } = useSelector((state: RootStoreType) => state.theme);

  // const changeSound = (slug: string) => {
  //   // console.log(slug);
  //   setSound(slug);
  //   controls.play();

  //   axios
  //     .get(`https://poznaj-testy.hekko24.pl/en/${sound}.mp3`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Voice />
        <WrapperContainer>
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/:id">
                <Item />
              </Route>
            </Switch>
          </>
        </WrapperContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
