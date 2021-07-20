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

  // const play = (url: string) => {
  //   console.log(url);
  //   setSound(url);
  // };
  return (
    <Box>
      <>
        {/* {audioElement} */}
        {/* <pre>{JSON.stringify(words[0], null, 3)}</pre> */}
        {words.map((item: Word, i: number) => (
          <div key={i}>
            <Box mb={5}>
              <VoteButtons />

              <Typography variant="h4" component="h2" gutterBottom>
                <PlayBtn slug={slug(item.word)} />
                {item.word}
                <Translation translatedText={item["PL"]} />
              </Typography>
              {/* <Typography variant="h6" component="h3" gutterBottom>
                <Translation translatedText={item["PL"]} />
              </Typography> */}

              {item.examples.map((example: WordExample, i: number) => (
                <Box mb={2} key={i}>
                  <Typography key={i} variant="subtitle1" gutterBottom>
                    <PlayBtn slug={slug(example.sentence)} />
                    <Link
                      to={to(slug(example.sentence))}
                      component={RouterLink}
                    >
                      {example.sentence}
                    </Link>
                    <Translation translatedText={example["PL"]} />
                  </Typography>
                  {/* <Typography key={i} variant="subtitle2" gutterBottom>
                    <Translation translatedText={example["PL"]} />
                  </Typography> */}
                </Box>
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
