import React from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import { Provider } from "react-redux";

import "reso-ui/styles";
import "./styles/global.scss";

import App from "./App";

console.log("ENV:", process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
