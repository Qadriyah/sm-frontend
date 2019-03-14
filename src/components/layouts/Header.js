import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo1.png";

const Header = () => (
  <div className="header" data-test="component-header">
    <Link to="#">
      {" "}
      <img src={logo} alt="" className="logo" />
      {" "}
    </Link>
  </div>
);

export default Header;
