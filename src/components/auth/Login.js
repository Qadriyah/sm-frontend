import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/loginAction";
import LoginForm from "../forms/LoginForm";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) {
      history.push("/admin/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) {
      const { history } = this.props;
      history.push("/admin/dashboard");
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userData = {
      username,
      password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { username, password, errors } = this.state;
    const { auth } = this.props;
    return (
      <div className="landing">
        <div className="landing-content">
          <div className="overlay-text">
            <h1>
              Manage your sales and product inventory.
              <br />
              <br />
              This application is meant for use in a single store
            </h1>
          </div>
          <div className="login-form">
            <h1 data-test="form-title">Login</h1>
            <LoginForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              username={username}
              password={password}
              loading={auth.loading}
              errors={errors}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(Login);
