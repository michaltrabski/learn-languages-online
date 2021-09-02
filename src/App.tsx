import { ThemeProvider } from "@emotion/react";
import React, { createElement, useRef } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { RootStoreType } from "./redux/store/store";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { themeMode } = useSelector((state: RootStoreType) => state.theme);
  const { content } = useSelector((state: RootStoreType) => state);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <Router>
        {/* <pre>{JSON.stringify(content, null, 2)}</pre>
        <br />
        <pre>{JSON.stringify(themeMode, null, 2)}</pre> */}

        <Header />
        {/* <Navbar />
        <Voice /> */}
        <Wrapper>
          <>
            <Switch>
              <Route exact path="/">
                <Home />
                {/* <h1>hello</h1> */}
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
