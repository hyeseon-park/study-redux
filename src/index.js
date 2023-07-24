import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { worker } from "./mocks/browser";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));

worker.start();

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </RecoilRoot>
);
