import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initAuthState = false;

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;

    case SIGN_OUT:
      return action.payload;

    default:
      return state;
  }
};

export default authReducer;
