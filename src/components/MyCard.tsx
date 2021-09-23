import React, { Fragment } from "react";
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
import { useSelector } from "react-redux";
import SentenceItem from "./SentenceItem";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Box } from "@material-ui/core";
import WordItem from "./WordItem";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  wordObj: Word;
}

export default function MyCard(props: Props) {
  const { target_lang } = useSelector((state: RootStoreType) => state.lang);
  const { wordObj } = props;
  const { word, examplesForWord } = wordObj;
  // const translation = wordObj[target_lang];
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card sx={{ maxWidth: "100%", mb: 2 }}>
      {/* <pre>{JSON.stringify(wordObj, null, 2)}</pre> */}
      <CardContent>
        <WordItem wordObj={wordObj} />
        {examplesForWord.map((exampleForWord) => (
          <Fragment key={exampleForWord.id}>
            <SentenceItem exampleForWord={exampleForWord} />
          </Fragment>
        ))}
      </CardContent>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Lorem ipsum dolor sit amet.</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
