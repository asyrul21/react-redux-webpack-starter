import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, NavItem } from "reso-ui";
import AppNavItem from "./AppNavItem";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import { useLoggedInUser } from "../../hooks/useLoggedInUser";
import { logoutUser } from "../../state/auth/slice";
import LocalesNavItem from "../LocalesNavItem/LocalesNavItem";
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            elementStyles={{
              color: "#2e7bc1",
              width: "unset",
              padding: "0 15px"
            }}
          >
            {t("navigation.log_out")}
          </NavItem>
        </>
      ) : (
        <>
          <AppNavItem to="/auth/login">{t("navigation.log_in")}</AppNavItem>
          <AppNavItem to="/auth/signup">{t("navigation.sign_up")}</AppNavItem>
        </>
      )}
      <LocalesNavItem />
    </Navbar>
  );
};

export default AppNavbar;
