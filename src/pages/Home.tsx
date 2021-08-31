import React, { createElement, useRef } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyCard from "../components/MyCard";
import { RootStoreType } from "../redux/store/store";

function Home() {
  const { content } = useSelector((state: RootStoreType) => state);

  return (
    <div>
      {/* <pre>{JSON.stringify(content, null, 2)}</pre> */}

      {content.words.map((wordObj) => (
        <MyCard wordObj={wordObj} />
      ))}
    </div>
  );
}

export default Home;
