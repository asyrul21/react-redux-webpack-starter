import React from "react";
import { IAppContext } from "./types";

export const AppContext = React.createContext<IAppContext>({
  serverSocketConnected: false,
  setServerSocketConnected() {}
});
