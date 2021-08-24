import { FETCH_TODOS, NEW_TODO } from "../actions/types";

const initTodosState = [];

const todoReducer = (state = initTodosState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case NEW_TODO:
      return [...todoReducer, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
