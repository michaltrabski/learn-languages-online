import React, { createElement, useRef } from "react";
import PlayButton from "./components/PlayButton";
import Text from "./components/Text";
import longText from "./data/longText1.txt";
import { useEffect } from "react";
import { useState } from "react";
import _, { join } from "lodash";
import {
  normalizeText,
  normalizeParagraph,
  normalizeWhiteSpaces,
} from "normalize-text";
import Wrapper from "./components/Wrapper";
import { Box, CssBaseline } from "@material-ui/core";
import { slug, to } from "./utils/utils";
import { useAudio } from "./hooks/useAudio";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface Word {
  w: string;
  c: number;
}
interface Sentence {
  s: string;
}

const stuffToRemoveFromText = ["“", "”", "...", "..", ";"];

function App() {
  console.log("App");
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
          .filter((item) => item.length > 10 && item.length < 40)
          .map((sentence) => ({ s: normalizeParagraph(sentence) }));
        // console.log(sentences);
        setSentences(sentences);
      });
  }, []);
  const play = (slug: string) => {
    // setIsPlaying((isPlaying) => !isPlaying);
    // if (audio.current) {
    //   if (slug !== audio.current.src) {
    //     console.log("new Audio");
    //     const newAudio = new Audio(sound);
    //     audio.current = newAudio;
    //     audio.current.onloadedmetadata = () => {
    //       console.log(audio.current.duration);
    //     };
    //     audio.current.onended = () => {
    //       console.log("endedn");
    //     };
    //   }
    // }
  };

  // useEffect(() => {
  //   if (isPlaying && audio.current) {
  //     audio.current.currentTime = 0;
  //     audio.current.play();
  //   }
  //   if (!isPlaying && audio.current) audio.current.pause();
  // }, [isPlaying]);

  const [sound, setSound] = useState("");
  const changeSound = (slug: string) => {
    console.log(slug);
    setSound(slug);
    controls.play();
  };
  // const audio = useRef(new Audio());
  // const [isPlaying, setIsPlaying] = useState(false);

  const { audioElement, controls } = useAudio(sound);
  // useEffect(() => {
  //   setSound(sample1);
  // }, [sound]);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Wrapper>
        <>
          <CssBaseline />
          {audioElement}
          {sound}
          <button onClick={() => controls.play()}>play</button>

          <Switch>
            <Route exact path="/">
              <Box>
                {sentences.slice(0, 50).map((item, i) => (
                  <p>
                    <PlayButton
                      play={play}
                      slug={slug(item.s)}
                      changeSound={changeSound}
                    />
                    <Link to={to(slug(item.s))}>{item.s}</Link>{" "}
                    {JSON.stringify(item)} {slug(item.s)}
                  </p>
                ))}
                <p>Last 10...</p>

                {sentences
                  .reverse()
                  .slice(0, 10)
                  .map((item, i) => (
                    <p>
                      <PlayButton
                        play={play}
                        slug={slug(item.s)}
                        changeSound={changeSound}
                      />
                      <Link to="/">{item.s}</Link>
                    </p>
                  ))}
              </Box>
            </Route>
          </Switch>
        </>
      </Wrapper>
    </Router>
  );
}

export default App;
