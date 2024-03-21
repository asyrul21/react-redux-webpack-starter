import { Dispatch, SetStateAction } from "react";

export interface IAppContext {
  // socket io connection
  serverSocketConnected: boolean;
  setServerSocketConnected: Dispatch<SetStateAction<boolean>>;
}
