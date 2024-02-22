import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { useLoggedInUser } from "./useLoggedInUser";

export const useAuthGuard = (mustBeAdmin = false) => {
  const { isAuthenticated, loggedInUser } = useLoggedInUser();

  useEffect(() => {
    const notLoggedIn = () => !isAuthenticated || !loggedInUser;

    if (notLoggedIn()) {
      redirect("/auth/unauthorized");
    }
    if (mustBeAdmin) {
      if (notLoggedIn() || !loggedInUser.isAdmin) {
        redirect("/auth/unauthorized");
      }
    }
  }, [history, isAuthenticated, loggedInUser, mustBeAdmin]);

  return {
    isAuthenticated,
    loggedInUser,
  };
};
