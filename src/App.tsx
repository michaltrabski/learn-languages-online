import { ThemeProvider } from "@emotion/react";
import React, { createElement, useRef } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { RootStoreType } from "./redux/store/store";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { themeMode } = useSelector((state: RootStoreType) => state.theme);

  return (
    <ThemeProvider theme={themeMode === "light" ? darkTheme : lightTheme}>
      <Router>
        {/* <pre>{JSON.stringify(voice, null, 2)}</pre> */}
        <br />
        <br />
        <br />
        <pre>{JSON.stringify(themeMode, null, 2)}</pre>

        {/* <Navbar />
        <Voice /> */}
        <Wrapper>
          <>
            <Switch>
              <Route exact path="/">
                {/* <Home /> */}
                <h1>hello</h1>
              </Route>
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
