import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({
  counter,
  posts,
  comments,
});

export default rootReducer;
