import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import React, { createElement, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Voice from "./components/Voice";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { loadContent } from "./redux/actions/contentActions";
import { ContentState } from "./redux/reducers/contentReducer";
import { RootStoreType } from "./redux/store/store";
import { ENDPOINT } from "./settings/settings";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const { themeMode } = useSelector((state: RootStoreType) => state.theme);
  const { source_lang, target_lang } = useSelector(
    (state: RootStoreType) => state.lang
  );
  const { words, currentPage } = useSelector(
    (state: RootStoreType) => state.content
  );
  const { voice } = useSelector((state: RootStoreType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContent(source_lang, target_lang, currentPage));
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <Router>
        <pre>{JSON.stringify(voice, null, 2)}</pre>

        {/* <pre>{JSON.stringify(themeMode, null, 2)}</pre> */}

        <Header />
        {/* <Voice /> */}

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
