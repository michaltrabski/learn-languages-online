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

interface Props {
  slug: string;
}

export default function Actions(props: Props) {
  const dispatch = useDispatch();

  const handlePlay = (slug: string) => {
    dispatch(changeVoice(slug));
  };
  return (
    <Box component="span">
      <IconButton>
        <AddCircleOutlineIcon color="success" fontSize="large" />
      </IconButton>

      <IconButton onClick={() => handlePlay(props.slug)}>
        <PlayCircleOutlineIcon color="primary" fontSize="large" />
      </IconButton>
    </Box>
  );
}