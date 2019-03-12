import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../layouts/Header";
import AdminMenu from "./AdminMenu";
import ProfilePicture from "./ProfilePicture";
import AdminContent from "./AdminContent";
import { getCategories } from "../../actions/categoryActions";
import isEmpty from "../../utils/isEmpty";
import { logout } from "../../actions/loginAction";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      categoryId: "",
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.errors)) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const {
      productName, productPrice, categoryId, errors,
    } = this.state;
    const { categories } = this.props;
    const options = categories.categories.categories;
    return (
      <div className="container-one">
        <Header />
        <AdminMenu onClick={this.onLogout} />
        <ProfilePicture />
        <AdminContent
          onSubmit={this.onSubmit}
          category={categoryId}
          onChange={this.onChange}
          options={options || []}
          productName={productName}
          productPrice={productPrice}
          errors={errors}
          loading={categories.loading}
        />
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  categories: state.categories,
});

export default connect(
  mapStateToProps,
  { getCategories, logout },
)(AdminDashboard);