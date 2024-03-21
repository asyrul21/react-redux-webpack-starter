import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store";
import { Provider } from "react-redux";

import "reso-ui/styles";
import "./styles/global.scss";

import App from "./App";
import { AppContextProvider } from "./contexts/AppContext/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("ENV:", process.env.NODE_ENV);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);
