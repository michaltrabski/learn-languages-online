import React, { createElement, useRef } from "react";

import longText from "../data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _, { join } from "lodash";
import {
  normalizeText,
  normalizeParagraph,
  normalizeWhiteSpaces,
} from "normalize-text";
import { getSentences, getWords } from "../utils/utils";

function Experiment1() {
  const [text, setText] = useState("Experiment1...");
  const [words, setWords] = useState<any>([]);
  const [sentences, setSentences] = useState<any>([]);

  useEffect(() => {
    fetch(longText)
      .then((res) => res.text())
      .then((text) => {
        // 1 normalize text
        let normalText = normalizeText(normalizeWhiteSpaces(text));
        for (const el of ["“", "”", "...", "..", ";"]) {
          normalText = normalText.replaceAll(el, "");
        }
        setText(normalText);

        // 2 get sentences
        const sentences = getSentences(normalText);
        // console.log(sentences);
        setSentences(sentences);

        // 3 get words
        const words = getWords(normalText, sentences);
        setWords(words);
      });
  }, []);

  return (
    <>
      {text.slice(0, 1000)}
      <p>---------------------------------------------</p>
      <div>
        {words.slice(0, 10).map((item: any, i: number) => (
          <p key={item.word}>
            {i}| {item.word} {JSON.stringify(item)}
          </p>
        ))}
        {sentences.slice(0, 10).map((item: any, i: number) => (
          <p key={i}>
            {i}| {item} {JSON.stringify(item)}
          </p>
        ))}
      </div>
    </>
  );
}

export default Experiment1;
