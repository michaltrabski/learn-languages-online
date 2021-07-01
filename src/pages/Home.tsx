import React, { createElement, useRef } from "react";
import "@fontsource/roboto";
import longText from "../data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

import { Box, Typography } from "@material-ui/core";
import { getSentences, getText, getWords, slug, to } from "../utils/utils";
import { useAudio } from "../hooks/useAudio";

import PlayBtn from "../components/PlayBtn";
import { Button } from "@material-ui/core";
import Translation from "../components/Translation";

function Home() {
  const [sentences, setSentences] = useState<any[]>([]);
  const [text, setText] = useState("Loading...");
  const [words, setWords] = useState<any[]>([]);
  const [sound, setSound] = useState("");
  const { audioElement, controls } = useAudio(sound);
  const [limit, setLimit] = useState(5);

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
    <Box>
      <>
        {words.slice(0, limit).map((item: any, i: number) => (
          <div key={i}>
            <Box mb={5}>
              <Typography variant="h6" gutterBottom>
                {i + 1}. <PlayBtn />{" "}
                <span data-mp3={item.word}>{item.word}</span>
                <Translation />
              </Typography>

              {item.examples.map((example: string, i: number) => (
                <Typography key={i} variant="subtitle2" gutterBottom>
                  <PlayBtn /> <span data-mp3={example}>{example}</span>
                  <Translation />
                </Typography>
              ))}
            </Box>
          </div>
        ))}

        <Button onClick={() => setLimit((l) => l + 10)}>Pokaż więcej...</Button>

        {words.slice(0, 1000).map((w) => (
          <span key={w.word}>{w.word}, </span>
        ))}
      </>
    </Box>
  );
}

export default Home;
