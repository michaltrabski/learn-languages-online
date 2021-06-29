import React, { createElement, useRef } from "react";
import "@fontsource/roboto";
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
import axios from "axios";
import Experiment1 from "./components/Experiment1";

interface Word {
  w: string;
  c: number;
}
interface Sentence {
  s: string;
}

const stuffToRemoveFromText = ["“", "”", "...", "..", ";"];

function App() {
  // console.log("App");
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [text, setText] = useState("Loading...");
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    // console.log("xxxxxxxxxx");
    fetch(longText)
      .then((res) => res.text())
      .then((text) => {
        let normalText = normalizeText(normalizeWhiteSpaces(text));

        // remove stuff from text

        for (const el of stuffToRemoveFromText) {
          normalText = normalText.replaceAll(el, "");
        }
        // console.log("yyyyyyyyyy");
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
    // console.log(slug);
    setSound(slug);
    controls.play();

    axios
      .get(`https://poznaj-testy.hekko24.pl/en/${sound}.mp3`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // const audio = useRef(new Audio());
  // const [isPlaying, setIsPlaying] = useState(false);

  const { audioElement, controls } = useAudio(sound);
  // useEffect(() => {
  //   setSound(sample1);
  // }, [sound]);

  return (
    <Router>
      <Wrapper>
        <>
          <CssBaseline />

          <Switch>
            <Route exact path="/">
              {audioElement}
              {sound}
              <a href={`https://poznaj-testy.hekko24.pl/en/${sound}.mp3`}>
                {sound}
              </a>
              <button onClick={() => controls.play()}>play</button>
              <Box>
                {sentences.slice(0, 50).map((item, i) => (
                  <p key={i}>
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
                    <p key={i}>
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
            <Route path="/experiment1">
              <Experiment1 />
            </Route>
          </Switch>
        </>
      </Wrapper>
    </Router>
  );
}

export default App;
