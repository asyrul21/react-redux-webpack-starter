import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, NavItem } from "reso-ui";
import AppNavItem from "./AppNavItem";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import { useLoggedInUser } from "../../hooks/useLoggedInUser";
import { logoutUser } from "../../state/auth/slice";

const AppNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loggedInUser } = useLoggedInUser();

  // console.log("loggedInUser:", loggedInUser);
  return (
    <Navbar textLogo="MyApp" logoHref="/">
      {/* {true ? ( */}
      {isAuthenticated && typeof loggedInUser._id === "string" ? (
        <>
          <AppNavItem to="/protected">My Page</AppNavItem>
          <NavItem
            Implementation="button"
            onClick={() => {
              dispatch(logoutUser("hello redux"));
              navigate("/");
            }}
            elementStyles={{ color: "#2e7bc1" }}
          >
            Log Out
          </NavItem>
        </>
      ) : (
        <>
          <AppNavItem to="/auth/login">Log In</AppNavItem>
          <AppNavItem to="/auth/signup">Sign Up</AppNavItem>
        </>
      )}
    </Navbar>
  );
};

export default AppNavbar;
