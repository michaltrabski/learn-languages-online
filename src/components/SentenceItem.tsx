import React from "react";
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
import { ExampleForWord, Word } from "../redux/reducers/contentReducer";
import { RootStoreType } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { showExampleWords } from "../redux/actions/contentActions";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeSlug } from "../utils/utils";
import { changeVoice } from "../redux/actions/voiceActions";
import WordsInSentenceItem from "./WordsInSentenceItem";
import Actions from "./Actions";
import Play from "./Play";

interface Props {
  exampleForWord: ExampleForWord;
}

export default function SentenceItem(props: Props) {
  const [show, setShow] = useState(false);
  const { target_lang } = useSelector((state: RootStoreType) => state.lang);
  const { example } = props.exampleForWord;
  const slug = makeSlug(example);
  const translation = props.exampleForWord[target_lang];

  const handleShow = () => {
    // dispatch(showExampleWords(show ? false : true));
    setShow((p) => !p);
  };

  // const handlePlay = (slug: string) => {
  //   dispatch(changeVoice(slug));
  // };

  // const handleEditableChange = () => {
  //   console.log("changes");
  // };
  return (
    <Box>
      {/* <pre>{JSON.stringify(props.exampleForWord, null, 2)}</pre>
      <pre>{JSON.stringify(slug, null, 2)}</pre> */}

      {/* <Actions slug={slug} /> */}

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.dark",
          fontSize: "1.3rem",
          // backgroundColor: "green",
        }}
        variant="subtitle1"
        component="h3"
        gutterBottom
      >
        <Play slug={slug} />
        <Box
          sx={{
            cursor: "pointer",
          }}
          component="span"
          onClick={handleShow}
        >
          {example}
        </Box>
      </Typography>

      {show && (
        <WordsInSentenceItem slug={slug} translation={translation || ""} />
      )}
    </Box>
  );
}
