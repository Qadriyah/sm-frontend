import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../layouts/Header";
import AdminMenu from "./AdminMenu";
import ProfilePicture from "./ProfilePicture";
import AdminContent from "./AdminContent";
import { getCategories } from "../../actions/categoryActions";
import { logout } from "../../actions/loginAction";
import { getProducts } from "../../actions/productActions";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }

  onLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="container-one">
        <Header />
        <AdminMenu onClick={this.onLogout} />
        <ProfilePicture />
        <AdminContent />
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  categories: state.categories,
});

export default connect(
  mapStateToProps,
  {
    getCategories,
    logout,
    getProducts,
  },
)(AdminDashboard);
