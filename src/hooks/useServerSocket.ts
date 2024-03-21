import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext/AppContext";
import { socket } from "../providers/Socket";

export const useServerSocket = () => {
  const { setServerSocketConnected } = useContext(AppContext);

  useEffect(() => {
    function onSocketConnect() {
      setServerSocketConnected(true);
    }

    function onSocketDisconnect() {
      setServerSocketConnected(false);
    }

    socket.on("connect", onSocketConnect);
    socket.on("disconnect", onSocketDisconnect);

    return () => {
      socket.off("connect", onSocketConnect);
      socket.off("disconnect", onSocketDisconnect);
    };
  }, []);
};
