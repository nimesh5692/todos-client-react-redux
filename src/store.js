import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { default as rootReducer } from "./reducers";

const initState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
