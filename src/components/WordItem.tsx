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
import { Word } from "../redux/reducers/contentReducer";
import { RootStoreType } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { showExampleWords } from "../redux/actions/contentActions";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeSlug } from "../utils/utils";
import { changeVoice } from "../redux/actions/voiceActions";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

interface Props {
  wordObj: Word;
}

export default function WordItem(props: Props) {
  const [show, setShow] = useState(false);
  const { target_lang } = useSelector((state: RootStoreType) => state.lang);
  const dispatch = useDispatch();
  const { word } = props.wordObj;
  const slug = makeSlug(word);
  const translation = props.wordObj[target_lang];

  const handleShow = () => {
    dispatch(showExampleWords(true));
    setShow((p) => !p);
  };

  const handlePlay = (slug: string) => {
    dispatch(changeVoice(slug));
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          color: "primary.dark",
          cursor: "pointer",
          fontSize: "2.3rem",
        }}
        variant="subtitle1"
        component="h2"
      >
        <IconButton>
          <AddCircleOutlineIcon color="success" fontSize="large" />
        </IconButton>
        <IconButton onClick={() => handlePlay(slug)}>
          <PlayCircleOutlineIcon color="primary" fontSize="large" />
        </IconButton>
        <Box sx={{ mr: 1 }} component="span" onClick={handleShow}>
          {word}
        </Box>
        {show && (
          <Box sx={{ cursor: "default" }} component="span" color="gray">
            - {translation}
          </Box>
        )}
      </Typography>

      <IconButton>
        <DeleteTwoToneIcon color="error" fontSize="large" />
      </IconButton>
    </Box>
  );
}
