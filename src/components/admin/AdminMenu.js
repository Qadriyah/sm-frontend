import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AdminMenu = ({ onClick }) => (
  <div className="side-menu" id="drawer">
    <Link to="/admin/category">
      <div className="side-menu-item">
        <i className="far fa-object-group mr-2" />
        Category
      </div>
    </Link>
    <Link to="/admin/dashboard">
      <div className="side-menu-item">
        <i className="fas fa-list-alt mr-2" />
        Product
      </div>
    </Link>
    <Link to="/admin/stock">
      <div className="side-menu-item">
        <i className="fas fa-hdd mr-2" />
        Stock
      </div>
    </Link>
    <Link to="/admin/sales/records">
      <div className="side-menu-item">
        <i className="fas fa-archive mr-2" />
        Sales
      </div>
    </Link>
    <Link to="/admin/attendant">
      <div className="side-menu-item">
        <i className="fas fa-user-circle mr-2" />
        Attendant
      </div>
    </Link>
    <Link to="#" id="logout" onClick={onClick}>
      <div className="side-menu-item">
        <i className="fas fa-sign-out-alt mr-2" />
        Logout
      </div>
    </Link>
  </div>
);

AdminMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdminMenu;
