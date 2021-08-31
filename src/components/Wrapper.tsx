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
      <Container maxWidth="md">
        {props.children}
        {/* <Paper>
          sdfdfg
          <Button>asdasd</Button>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                fsddf
              </Grid>
              <Grid item xs={4}>
                sdf
              </Grid>
              <Grid item xs={4}>
                fds
              </Grid>
              <Grid item xs={8}>
                sdf
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ bgcolor: "#cfe8fc", height: "1vh" }} />
        </Paper> */}
      </Container>
    </React.Fragment>
  );
}
