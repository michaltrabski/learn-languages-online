import React, { useCallback, useRef } from "react";
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
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import Actions from "./Actions";
import _ from "lodash";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import ContentEditable from "react-contenteditable";
import axios from "axios";
import FlagTwoToneIcon from "@mui/icons-material/FlagTwoTone";
import Play from "./Play";

interface Props {
  wordObj: Word;
}

export default function WordItem(props: Props) {
  const [deleted, setDeleted] = useState(false);
  const [show, setShow] = useState(false);
  const { target_lang } = useSelector((state: RootStoreType) => state.lang);
  const { word } = props.wordObj;
  // const wordRef = useRef(word);
  const slug = makeSlug(word);
  const translations = props.wordObj[target_lang];

  const handleShow = () => {
    setShow((p) => !p);
  };

  const handleDelete = () => {
    console.log("handleDelete");
    setDeleted((p) => !p);
  };

  // const handleChange = (evt: any) => {
  //   wordRef.current = evt?.target?.value;
  // };

  // const handleBlur = () => {
  //   if (wordRef.current === word) return;
  //   axios
  //     .post("http://localhost:5000/api", {
  //       type: "word",
  //       oryginal: word,
  //       replaceWith: wordRef.current,
  //     })
  //     .then(() => console.log("Send => ", wordRef.current));
  // };
  return (
    <>
      {/* <pre>{JSON.stringify(props.wordObj, null, 2)}</pre> */}

      <Box
        sx={{
          opacity: deleted ? "0.1" : "1",
          // backgroundColor: "yellow",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // backgroundColor: "gray",
          }}
        >
          <Actions slug={slug} />
          <IconButton onClick={handleDelete}>
            {deleted ? (
              <RestoreFromTrashIcon color="primary" fontSize="large" />
            ) : (
              <DeleteTwoToneIcon color="error" fontSize="large" />
            )}
          </IconButton>
        </Box> */}

        <Typography
          sx={{
            position: "relative",
            color: "primary.dark",

            fontSize: "2.3rem",
            // backgroundColor: "orange",
          }}
          variant="subtitle1"
          component="h2"
        >
          <Play slug={slug} />
          <Box
            sx={{
              cursor: "pointer",
            }}
            component="span"
            onClick={handleShow}
          >
            {word}
          </Box>
        </Typography>
      </Box>
      {show && (
        <>
          {translations?.slice(0, 5).map((translationItem, index) => (
            <Typography key={index} variant="body2" gutterBottom>
              - {translationItem}
            </Typography>
          ))}
        </>
      )}
    </>
  );
}
