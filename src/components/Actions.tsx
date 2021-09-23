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
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { makeSlug } from "../utils/utils";
import {
  changeAudioState,
  changeVoice,
  playVoice,
} from "../redux/actions/voiceActions";
import WordsInSentenceItem from "./WordsInSentenceItem";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { initialAudioState } from "../redux/reducers/voiceReducer";
import { useAudio1 } from "../hooks/useAudio1";

interface Props {
  slug: string;
}

export default function Actions(props: Props) {
  const { path } = useSelector((state: RootStoreType) => state.voice);
  const { source_lang } = useSelector((state: RootStoreType) => state.lang);

  const { audioElement, audioState, play } = useAudio1(
    path,
    props.slug,
    source_lang
  );

  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  // const { waiting } = audioState;

  const handlePlay = (slug: string) => {
    dispatch(changeVoice(slug));
    play();
  };

  const handleAddToRepetition = () => {
    setAdded((p) => !p);
  };
  return (
    <>
      <Box>{audioElement}</Box>

      <Box component="span">
        <IconButton onClick={handleAddToRepetition}>
          {added ? (
            <ThumbUpIcon color="success" fontSize="large" />
          ) : (
            <ThumbUpOffAltIcon
              sx={{ opacity: "0.1" }}
              color="inherit"
              fontSize="large"
            />
          )}
        </IconButton>

        <IconButton onClick={() => handlePlay(props.slug)}>
          <PlayCircleOutlineIcon color="primary" fontSize="large" />
        </IconButton>

        {/*           
        {slug !== props.slug && (
          <IconButton onClick={() => handlePlay(props.slug)}>
            <PlayCircleOutlineIcon color="primary" fontSize="large" />
          </IconButton>
        )}

        {slug === props.slug && (
          <IconButton onClick={() => handlePlay(props.slug)}>
            {waiting ? (
              <HourglassEmptyIcon color="primary" fontSize="large" />
            ) : (
              <PlayCircleOutlineIcon color="primary" fontSize="large" />
            )}
          </IconButton>
        )} */}
      </Box>

      {/* <pre>{JSON.stringify(audioState, null, 2)}</pre> */}
    </>
  );
}
