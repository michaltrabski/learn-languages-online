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

interface Props {
  exampleForWord: ExampleForWord;
}

export default function SentenceItem(props: Props) {
  const [show, setShow] = useState(false);
  const { target_lang } = useSelector((state: RootStoreType) => state.lang);
  const dispatch = useDispatch();
  const { example } = props.exampleForWord;
  const slug = makeSlug(example);
  const translation = props.exampleForWord[target_lang];

  const handleShow = () => {
    dispatch(showExampleWords(true));
    setShow((p) => !p);
  };

  const handlePlay = (slug: string) => {
    dispatch(changeVoice(slug));
  };
  return (
    <Box>
      {/* <pre>{JSON.stringify(props.exampleForWord, null, 2)}</pre>
      <pre>{JSON.stringify(slug, null, 2)}</pre> */}
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.dark",
          cursor: "pointer",
          fontSize: "1.3rem",
        }}
        variant="subtitle1"
        gutterBottom
        component="h3"
      >
        <IconButton>
          <AddCircleOutlineIcon color="success" fontSize="large" />
        </IconButton>

        <IconButton onClick={() => handlePlay(slug)}>
          <PlayCircleOutlineIcon color="primary" fontSize="large" />
        </IconButton>

        <Box component="span" onClick={handleShow}>
          {example}
        </Box>
      </Typography>

      {show && (
        <Box
          sx={{
            padding: "0.1rem 1rem 1.5rem",
            // border: "1px solid red",
            // borderColor: "primary.dark",
            //   "&:hover": {
            //     backgroundColor: "primary.main",
            //     opacity: [0.9, 0.8, 0.7],
            //   },
          }}
        >
          <Typography variant="subtitle1" gutterBottom component="h3">
            {translation}
          </Typography>
          pojedyncze słówka
        </Box>
      )}
    </Box>
  );
}
