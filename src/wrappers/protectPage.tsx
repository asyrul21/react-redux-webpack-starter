import React from "react";
import { useAuthGuard } from "../hooks/useAuthGuard";

type config = {
  forAdmin?: boolean;
};

const protectPage = (Page: () => JSX.Element, config?: config) =>
  function ProtectedPage() {
    const { forAdmin } = config || {};
    const { isAuthenticated, loggedInUser } = useAuthGuard(forAdmin ?? false);
    if (!isAuthenticated || !loggedInUser) {
      return null;
    }
    return <Page />;
  };

export default protectPage;
