import { Box, Button } from "@material-ui/core";
import React, { createElement, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyCard from "../components/MyCard";
import { loadContent } from "../redux/actions/contentActions";
import { RootStoreType } from "../redux/store/store";

function Home() {
  const { words, currentPage } = useSelector(
    (state: RootStoreType) => state.content
  );
  const { source_lang, target_lang } = useSelector(
    (state: RootStoreType) => state.lang
  );
  const dispatch = useDispatch();

  const handleLoadMoreWords = () => {
    dispatch(loadContent(source_lang, target_lang, currentPage));
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(content, null, 2)}</pre> */}

      {words.map((wordObj) => (
        <Fragment key={wordObj.id}>
          <MyCard wordObj={wordObj} />
        </Fragment>
      ))}

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleLoadMoreWords}
          disabled={words.length === 0}
        >
          {words.length === 0 ? "Loading..." : "Load more..."}
        </Button>
      </Box>
    </div>
  );
}

export default Home;
