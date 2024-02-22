import { useAppSelector } from "../state/stateHooks";

export const useLoggedInUser = () => {
  const authReducer = useAppSelector((state: any) => state.auth);
  const { isAuthenticated, loggedInUser } = authReducer;

  return {
    isAuthenticated,
    loggedInUser,
  };
};
