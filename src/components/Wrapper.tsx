import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

interface Props {
  children?: React.ReactNode;
}
export default function Wrapper(props: Props) {
  return (
    <React.Fragment>
      {props.children}
      {/* <CssBaseline />
      <Container maxWidth="md">
        <>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
          {props.children}
        </>
      </Container> */}
    </React.Fragment>
  );
}
