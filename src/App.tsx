import React from "react";
import PlayButton from "./components/PlayButton";
import Text from "./components/Text";
import longText from "./data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import {
  normalizeText,
  normalizeParagraph,
  normalizeWhiteSpaces,
} from "normalize-text";
import Wrapper from "./components/Wrapper";
import { Box, CssBaseline } from "@material-ui/core";

interface Word {
  w: string;
  c: number;
}
interface Sentence {
  s: string;
}

const stuffToRemoveFromText = ["“", "”", "...", "..", ";"];

function App() {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [text, setText] = useState("Loading...");

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetch(longText)
      .then((res) => res.text())
      .then((text) => {
        let normalText = normalizeText(normalizeWhiteSpaces(text));

        // remove stuff from text

        for (const el of stuffToRemoveFromText) {
          normalText = normalText.replaceAll(el, "");
        }

        setText(normalText);

        const accuranceArray = _.countBy(normalText.split(" "));
        const words = Object.entries(accuranceArray).map((item) => {
          const word: Word = { w: item[0], c: item[1] };
          return word;
        });
        setWords(_.orderBy(words, ["c"], ["desc"]));

        // sentence
        const sentencesArr = normalText.split(
          /(\?\s)|(\.\s)|(!\s)|(\."\s)|(\.”\s)/g
        );
        const sentences = sentencesArr
          .filter(
            (item) => item !== ". " && item !== undefined && item.length > 2
          )
          .map((sentence) => ({ s: normalizeParagraph(sentence) }));
        console.log(sentences);
        setSentences(sentences);
      });
  }, []);
  return (
    <Wrapper>
      <>
        <CssBaseline />
        <Box>
          {sentences.slice(0, 50).map((item, i) => (
            <p>
              <PlayButton /> {item.s}
            </p>
          ))}
          <p>Last 10...</p>
          {/* {text.slice(0, 4000)} */}
          {sentences
            .reverse()
            .slice(0, 10)
            .map((item, i) => (
              <p>
                <PlayButton /> {item.s}
              </p>
            ))}
          {/* {words.slice(0, 100).map((item, i) => (
            <p>
              {item.c} | {item.w}
            </p>
          ))} */}
        </Box>
      </>
    </Wrapper>
  );
}

export default App;
