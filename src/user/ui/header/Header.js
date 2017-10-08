import React, { Component } from "react";
import { Link } from "react-router";
import { HiddenOnlyAuth, VisibleOnlyAuth } from "../../../util/wrappers.js";
// UI Components
import LoginButtonContainer from "../loginbutton/LoginButtonContainer";
import LogoutButtonContainer from "../logoutbutton/LogoutButtonContainer";

import "./Header.css";

export default class Header extends React.Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() => (
      <div className="Header">
        <div className="LogoContainer">
          <Link to="/" className="is-active">
            <img
              className="Logo"
              src={require("../../../static/go-sofi-tag.png")}
              alt={"goSOFI Logo"}
            />
          </Link>
        </div>
        <div className="RightJustifiedMenu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <LogoutButtonContainer/>
        </div>
      </div>
    ));

    const OnlyGuestLinks = HiddenOnlyAuth(() => (
      <div className="Header">
        <div className="LogoContainer">
          <Link to="/">
            <img
              className="Logo"
              src={require("../../../static/go-sofi-tag.png")}
              alt={"goSOFI Logo"}
            />
          </Link>
        </div>
        <div className="RightJustifiedMenu">
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/signup">Register</Link>
          <LoginButtonContainer />
        </div>
      </div>
    ));

    return (
      <nav>
        <OnlyGuestLinks />
        <OnlyAuthLinks />
      </nav>
    );
  }
}
