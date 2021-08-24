import React from "react";
import { useSelector } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { Login, Todos, Navbar } from "./components";

import "./App.scss";

function App() {
  const isLoggedIn = useSelector((state) => {
    return state.auth;
  });

  return (
    <div>
      <Navbar isAuth={isLoggedIn} />
      <br />
      <br />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={5}
          >
            <Grid item xs={12} sm={12}>
              {isLoggedIn ? <Todos /> : <Login />}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default App;
