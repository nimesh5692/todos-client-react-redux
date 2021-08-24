import { SIGN_IN, SIGN_OUT } from "./types";
import userCredentials from "../components/Login/credentials";

export const login = (credentials) => (dispatch) => {
  let loggedIn = false;

  if (
    credentials.username === userCredentials.username &&
    credentials.password === userCredentials.password
  ) {
    // dispatch({
    //   type: SIGN_IN,
    //   payload: true,
    // });
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  dispatch({
    type: SIGN_IN,
    payload: loggedIn,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload: false,
  });
};
