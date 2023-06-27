import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware = applyMiddleware(thunk, loggerMiddleware);

const store = createStore(rootReducer, middleware);

export default store;
