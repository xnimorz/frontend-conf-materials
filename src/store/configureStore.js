import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import signalMiddleware from "signal-middleware";

import localstorageMiddleware, {
  getInitialStateFromLocalStorage
} from "../middleware/localstorage";

import comments from "../models/comments";
import areas from "../models/areas";
import switcher from "../models/switcher";
import { DIRTY } from "../constants/status";

const middlewares = [logger, signalMiddleware, localstorageMiddleware()];

export default function configureStore() {
  const store = createStore(
    combineReducers({
      comments,
      areas,
      switcher
    }),
    getInitialStateFromLocalStorage({
      comments: { status: DIRTY, data: [] },
      areas: { status: DIRTY, data: [] }
    }),
    applyMiddleware(...middlewares)
  );
  return store;
}
