import { Socket, io } from "socket.io-client";
import { config } from "../../config/config";

const APP_CONFIG = config[process.env.NODE_ENV as string];
const API_HOST = APP_CONFIG.API_HOST;

const getSocketInstance = (): Socket => {
  const URL = API_HOST;
  if (typeof URL === "string") {
    return io(URL);
  }
  return io();
};

export const socket: Socket = getSocketInstance();
