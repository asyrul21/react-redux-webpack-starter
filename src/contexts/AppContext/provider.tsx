import React, { useState } from "react";

import { AppContext } from "./AppContext";

export const AppContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [serverSocketConnected, setServerSocketConnected] =
    useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        serverSocketConnected,
        setServerSocketConnected
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
