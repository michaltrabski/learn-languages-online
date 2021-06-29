import React, { createElement, useRef } from "react";

import longText from "../data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _, { join } from "lodash";

import { getSentences, getText, getWords } from "../utils/utils";
import { Box, Button, Typography } from "@material-ui/core";
import PlayBtn from "./PlayBtn";

function Experiment1() {
  const [text, setText] = useState("Experiment1...");
  const [words, setWords] = useState<any>([]);
  const [sentences, setSentences] = useState<any>([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(longText)
      .then((res) => res.text())
      .then((text) => {
        const normalizedText = getText(text);
        setText(normalizedText.slice(0, 1100));

        // 2 get sentences
        const sentences = getSentences(normalizedText);
        // console.log(sentences);
        setSentences(sentences);

        // 3 get words
        const words = getWords(normalizedText, sentences);
        setWords(words);
      });
  }, []);

  return (
    <>
      {/* {text}
      <p>---------------------------------------------</p> */}

      {words.slice(0, limit).map((item: any, i: number) => (
        <div key={i}>
          <Box mb={5}>
            <Typography variant="h6" gutterBottom>
              {i + 1}. <PlayBtn /> <span data-mp3={item.word}>{item.word}</span>{" "}
              - Tłumaczenie
              {/* <Button variant="contained" color="default" size="small">
                Tłumaczenie
              </Button> */}
              {/* {i}| {item.word} {JSON.stringify(item)} */}
            </Typography>

            {item.examples.map((example: string, i: number) => (
              <Typography key={i} variant="subtitle2" gutterBottom>
                <PlayBtn /> <span data-mp3={example}>{example}</span> -
                Tłumaczenie
              </Typography>
            ))}
          </Box>
        </div>
      ))}
      <Button onClick={() => setLimit((l) => l + 10)}>Pokaż więcej...</Button>
      {/* <p>---------------------------------------------</p>
      {sentences.slice(0, 10).map((item: any, i: number) => (
        <p key={i}>
          {i}| {item} {JSON.stringify(item)}
        </p>
      ))} */}
    </>
  );
}

export default Experiment1;
