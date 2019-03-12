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

export class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
    this.props.drawer.isOpen = null;
  }

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { auth, drawer } = this.props;
    return (
      <div className="container-one">
        <Header />
        <AdminMenu onClick={this.onLogout} drawer={drawer} />
        <ProfilePicture auth={auth} />
        <AdminContent />
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  categories: state.categories,
  drawer: state.drawer,
});

export default connect(
  mapStateToProps,
  {
    getCategories,
    logout,
    getProducts,
  },
)(AdminDashboard);
