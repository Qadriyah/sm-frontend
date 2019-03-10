import React from "react";
import PropTypes from "prop-types";
import TextInputGroup from "../common/TextInputGroup";
import isEmpty from "../../utils/isEmpty";

const LoginForm = ({
  onSubmit, onChange, username, password, loading, errors,
}) => (
  <form id="myform" onSubmit={onSubmit}>
    <TextInputGroup
      name="username"
      id="name"
      placeholder="Username..."
      label="Username:"
      onChange={onChange}
      type="text"
      value={username}
    />
    <TextInputGroup
      name="password"
      id="password"
      placeholder="Password..."
      label="Password:"
      onChange={onChange}
      type="password"
      value={password}
    />
    <input type="submit" value="Login" className="wide-btn" disabled={!!loading} />
    <div className="mt-2">
      {loading ? (
        <span>
          <i className="fas fa-circle-notch fa-spin text-info loader" />
          <span data-test="spinner-text"> Please wait...</span>
        </span>
      ) : (
        <span className="error">{!isEmpty(errors) ? "Wrong username or password" : ""}</span>
      )}
    </div>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
};

export default LoginForm;
