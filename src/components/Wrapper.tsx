import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Button, Grid, Paper } from "@material-ui/core";

interface Props {
  children?: React.ReactNode;
}
export default function Wrapper(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 2 }}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
