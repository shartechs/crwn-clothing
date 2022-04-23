import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/UserContext/UserContext";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Navigation;
