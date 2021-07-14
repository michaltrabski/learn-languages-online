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
import VoteButtons from "../components/VoteButtons";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { ENDPOINT } from "../settings/settings";

interface WordExample {
  sentence: string;
  PL?: string;
}
export interface Word {
  word: string;
  count: number;
  examples: WordExample[];
  PL?: string;
}

function Home() {
  const [words, setWords] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const [sound, setSound] = useState("");
  // const { audioElement, controls } = useAudio(sound);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(`${ENDPOINT}/?slug=words-${currentPage}`);
        const { currentPages, howManyPages, words } = data;
        console.log(data);
        setWords(words);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Box>
      <>
        {/* <pre>{JSON.stringify(words[0], null, 3)}</pre> */}
        {words.map((item: Word, i: number) => (
          <div key={i}>
            <Box mb={5}>
              <Typography variant="h4" component="h2" gutterBottom>
                <PlayBtn /> <span data-mp3={slug(item.word)}>{item.word}</span>
                <Translation translatedText={item["PL"]} />
              </Typography>
              <VoteButtons />

              {item.examples.map((example: WordExample, i: number) => (
                <Typography key={i} variant="subtitle1" gutterBottom>
                  <PlayBtn />{" "}
                  <Link to={to(slug(example.sentence))} component={RouterLink}>
                    <span data-mp3={slug(example.sentence)}>
                      {example.sentence}
                    </span>
                  </Link>
                  <Translation translatedText={example["PL"]} />
                </Typography>
              ))}
            </Box>
          </div>
        ))}
        paginacja
        {/* <Button onClick={() => setLimit((l) => l + 10)}>Pokaż więcej...</Button> */}
      </>
    </Box>
  );
}

export default Home;
