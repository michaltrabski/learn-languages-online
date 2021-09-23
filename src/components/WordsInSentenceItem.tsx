import React, { useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  ExampleForWord,
  Sentence,
  Word,
  WordsInSentence,
} from "../redux/reducers/contentReducer";
import { RootStoreType } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { showExampleWords } from "../redux/actions/contentActions";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeSlug } from "../utils/utils";
import { changeVoice } from "../redux/actions/voiceActions";
import { ENDPOINT } from "../settings/settings";
import axios from "axios";
import Actions from "./Actions";

interface Props {
  slug: string;
  translation: string;
}

export default function WordsInSentenceItem(props: Props) {
  const [sentence, setSentence] = useState<Sentence | null>();
  const [words, setWords] = useState<WordsInSentence[]>([]);
  const { source_lang: EN, target_lang } = useSelector(
    (state: RootStoreType) => state.lang
  );
  const dispatch = useDispatch();
  const { slug, translation } = props;

  useEffect(() => {
    (async () => {
      const res = await axios.get<Sentence>(
        `${ENDPOINT}?EN=${EN}&slug=${slug}`
      );
      const sentence = res.data;
      if (sentence.type !== "sentence") return;

      const { words: newWords } = sentence;
      setSentence(sentence);
      setWords(newWords);

      console.log("Clen up here: WordsInSentenceItem");
    })();
  }, []);

  return (
    <Box>
      {/* <pre>{JSON.stringify(sentence, null, 2)}</pre> */}

      <Box sx={{ padding: "0.1rem 1rem 1.5rem" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "gray",
            fontSize: "1.3rem",
          }}
          variant="subtitle1"
          gutterBottom
          component="h3"
        >
          {translation}
        </Typography>

        {words.map((w, index) => (
          <Box key={index}>
            <Actions slug={makeSlug(w.word)} />
            <Box component="span">
              {w.word} - {w[target_lang]}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
