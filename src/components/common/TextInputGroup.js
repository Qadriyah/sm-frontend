import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  name, id, placeholder, label, onChange, type, value,
}) => (
  <div className="form-group">
    <div className="font-weight-bold text-left">{label}</div>
    <input
      className="form-control"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      data-test="component-input-field"
    />
  </div>
);

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
