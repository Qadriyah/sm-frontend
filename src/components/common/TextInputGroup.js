import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  name, id, placeholder, label, onChange, type, value,
}) => (
  <div>
    <label htmlFor={id}>
      <span className="font-weight-bold">{label}</span>
    </label>
    <input
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
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInputGroup;
