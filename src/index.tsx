import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store";
import { Provider } from "react-redux";
import "./i18n/i18n";

import "reso-ui/styles";
import "./styles/global.scss";

import App from "./App";
import { AppContextProvider } from "./contexts/AppContext/provider";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("ENV:", process.env.NODE_ENV);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </AppContextProvider>
  </React.StrictMode>
);
