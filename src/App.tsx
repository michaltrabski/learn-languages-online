import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import React, { createElement, useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Voice from "./components/Voice";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { RootStoreType } from "./redux/store/store";
import { ENDPOINT } from "./settings/settings";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { themeMode } = useSelector((state: RootStoreType) => state.theme);

  useEffect(() => {
    axios
      .get(`${ENDPOINT}?slug=content-EN-PL-1`)
      .then((res) => console.log(res.data));
  }, []);
  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <Router>
        {/* <pre>{JSON.stringify(content, null, 2)}</pre>
        <br />
        <pre>{JSON.stringify(themeMode, null, 2)}</pre> */}

        <Header />
        <Voice />

        <Wrapper>
          <>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/:id">
                {/* <Item /> */}
              </Route>
            </Switch>
          </>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
