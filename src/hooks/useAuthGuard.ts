import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser } from "./useLoggedInUser";

export const useAuthGuard = (mustBeAdmin = false) => {
  const navigate = useNavigate();
  const { isAuthenticated, loggedInUser } = useLoggedInUser();

  useEffect(() => {
    const notLoggedIn = () => !isAuthenticated || !loggedInUser;

    if (notLoggedIn()) {
      navigate("/auth/unauthorized");
    }
    if (mustBeAdmin) {
      if (notLoggedIn() || !loggedInUser.isAdmin) {
        navigate("/auth/unauthorized");
      }
    }
  }, [isAuthenticated, loggedInUser, mustBeAdmin, navigate]);

  return {
    isAuthenticated,
    loggedInUser
  };
};
