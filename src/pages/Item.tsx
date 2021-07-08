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
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../settings/settings";

interface Sentence {
  slug: string;
  source_lang: "EN";
  content: string;
  transplations: { PL?: string };
  words: string[];
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
      item
      <pre>{JSON.stringify(sentence, null, 3)}</pre>
    </Box>
  );
}

export default Item;
