import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="#">
      {" "}
      <img src="../media/logo1.png" alt="" className="logo" />
      {" "}
    </Link>
  </div>
);

export default Header;
