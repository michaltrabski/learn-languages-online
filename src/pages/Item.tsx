import React, { createElement, useRef } from "react";
import "@fontsource/roboto";
import longText from "../data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

import { Box, Typography } from "@material-ui/core";
import { slug, to } from "../utils/utils";
import { useAudio } from "../hooks/useAudio";

import PlayBtn from "../components/PlayBtn";
import { Button } from "@material-ui/core";
import Translation from "../components/Translation";
import VoteButtons from "../components/VoteButtons";
import { useParams, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { ENDPOINT } from "../settings/settings";

type ContentType = "sentence" | "word";

interface WordsInContent {
  word: string;
  PL?: string;
}
interface Content {
  type: ContentType;
  slug: string;
  source_lang: "EN";
  content: string;
  words?: WordsInContent[];
  PL?: string;
}

function Item() {
  const [loading, setLoading] = useState("LOADING...");
  const [content, setContent] = useState<Content | null>(null);
  let { id } = useParams<{ id?: string }>();

  useEffect(() => {
    (async () => {
      setLoading("LOADING...");
      if (!id) return;

      try {
        const { data } = await axios(`${ENDPOINT}/?slug=${id}`);
        console.log(data);
        setContent(data);
        setLoading("");
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <Box>
      {/* <pre>{JSON.stringify(content, null, 3)}</pre> */}

      {loading && loading}

      {content && !loading && (
        <Box mb={5}>
          <VoteButtons />

          <Typography variant="h4" component="h2" gutterBottom>
            <PlayBtn slug={slug(content.content)} />{" "}
            <span>{content.content}</span>
            <Translation translatedText={content["PL"]} />
          </Typography>

          {content.type === "sentence" &&
            content.words &&
            content.words.map((word, i) => (
              <Typography key={i} variant="subtitle1" gutterBottom>
                <PlayBtn slug={slug(word.word)} />
                <Link to={to(slug(word.word))} component={RouterLink}>
                  <span>{word.word}</span>
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
