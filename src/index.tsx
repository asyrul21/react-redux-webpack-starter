import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store";
import { Provider } from "react-redux";

import "reso-ui/styles";
import "./styles/global.scss";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
