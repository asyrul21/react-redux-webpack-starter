import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "reso-ui";

import "./AppNav.scss";

const AppNavItem = ({ children, to }: any) => {
  const { pathname } = useLocation();

  const navItemClasses = classnames({
    navItem_base: true,
    app_navItem: true,
    app_navItem_active: pathname === to
  });

  //   console.log("location path:", pathname);
  return (
    <NavItem
      renderCustomNavItem={({ active }) => {
        return (
          <Link
            to={to}
            className={navItemClasses}
            style={{
              width: "unset",
              minWidth: "90px",
              padding: "0 15px"
            }}
          >
            {children}
          </Link>
        );
      }}
    >
      {children}
    </NavItem>
  );
};

export default AppNavItem;
