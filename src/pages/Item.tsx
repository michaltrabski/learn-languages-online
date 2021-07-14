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
import { useParams, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { ENDPOINT } from "../settings/settings";

interface Word {
  word: string;
  PL?: string;
}
interface Sentence {
  type: "sentence";
  slug: string;
  mp3: string | null;
  source_lang: "EN";
  content: string;
  words: Word[];
  PL?: string;
}
function Item() {
  const [sentence, setSentence] = useState<Sentence | null>(null);
  let { id } = useParams<{ id?: string }>();

  useEffect(() => {
    (async () => {
      if (!id) return;

      try {
        const { data } = await axios(`${ENDPOINT}/?slug=${id}`);
        console.log(data);
        setSentence(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Box>
      {/* <pre>{JSON.stringify(sentence, null, 3)}</pre> */}

      {sentence && (
        <Box mb={5}>
          <Typography variant="h4" component="h2" gutterBottom>
            <PlayBtn />{" "}
            <span data-mp3={slug(sentence.mp3)}>{sentence.content}</span>
            <Translation translatedText={sentence["PL"]} />
          </Typography>
          <VoteButtons />

          {sentence.words.map((word: Word, i: number) => (
            <Typography key={i} variant="subtitle1" gutterBottom>
              <PlayBtn />{" "}
              <Link to={to(slug(word.word))} component={RouterLink}>
                <span data-mp3={slug(word.word)}>{word.word}</span>
              </Link>
              <Translation translatedText={word["PL"]} />
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Item;
