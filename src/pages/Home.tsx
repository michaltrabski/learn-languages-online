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

interface Data {
  currentPage: number;
  howManyPages: string;
  words: Word[];
}

function Home() {
  const [words, setWords] = useState<Word[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [howManyPages, setHowManyPages] = useState(0);

  const [moreDetails, setMoreDetails] = useState<any>({});
  // const [limit, setLimit] = useState(5);
  // const [sound, setSound] = useState("");
  // const { audioElement, controls } = useAudio(sound);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Data>(
          `${ENDPOINT}/?slug=words-${currentPage}`
        );
        const { howManyPages, words } = data;
        setHowManyPages(+howManyPages);
        console.log(data);
        setWords(words);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const showMorePages = async () => {
    const c = currentPage;
    try {
      const response = await axios.get<Data>(
        `${ENDPOINT}/?slug=words-${c + 1}`
      );
      const { currentPage, words: newWords } = response.data;
      setCurrentPage(currentPage);
      setWords((words) => [...words, ...newWords]);
    } catch (err) {
      console.log(err);
    }
  };

  const loadDetail = async (slug: string) => {
    const show = moreDetails[slug] === true ? false : true;
    console.log(moreDetails, show);
    setMoreDetails((d: any) => ({ ...d, [slug]: show }));
    try {
      const response = await axios(`${ENDPOINT}/?slug=${slug}`);
      const { words } = response.data;
      // console.log(response.data.words);
      setMoreDetails((d: any) => ({
        ...d,
        [`${slug}_words`]: words,
      }));
    } catch (err) {
      console.log(err);
    }
  };

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
                  <Typography
                    key={i}
                    variant="subtitle1"
                    gutterBottom
                    color="primary"
                  >
                    <PlayBtn slug={slug(example.sentence)} />
                    {/* <Link
                      to={to(slug(example.sentence))}
                      component={RouterLink}
                    >
                      {example.sentence}
                    </Link> */}
                    <span onClick={() => loadDetail(slug(example.sentence))}>
                      {example.sentence}
                    </span>
                    <Translation translatedText={example["PL"]} />
                  </Typography>
                  {moreDetails[slug(example.sentence)] && (
                    <>
                      <Typography variant="subtitle2" gutterBottom>
                        This is more info about this sentence:
                      </Typography>
                      {true &&
                        moreDetails[`${slug(example.sentence)}_words`] &&
                        moreDetails[`${slug(example.sentence)}_words`].map(
                          (item: any) => (
                            <p>
                              {item.word} | {item["PL"]}
                            </p>
                          )
                        )}
                    </>
                  )}
                  {/* <Typography key={i} variant="subtitle2" gutterBottom>
                    <Translation translatedText={example["PL"]} />
                  </Typography> */}
                </Box>
              ))}
            </Box>
          </div>
        ))}

        {currentPage < howManyPages && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={showMorePages}
          >
            Show more!!!
          </Button>
        )}
      </>

      {/* <pre>{JSON.stringify(moreDetails, null, 3)}</pre>
      <pre>{JSON.stringify(words[0], null, 3)}</pre> */}
    </Box>
  );
}

export default Home;
