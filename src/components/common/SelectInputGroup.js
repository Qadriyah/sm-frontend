import React from "react";
import PropTypes from "prop-types";

const SelectInputGroup = ({
  name, value, onChange, options, id, label,
}) => {
  const selectOptions = options.map(option => (
    <option key={option.id} value={option.id}>
      {option.category_name}
    </option>
  ));
  return (
    <div className="form-group">
      <div className="font-weight-bold text-left">{label}</div>
      <select className="form-control" name={name} value={value} onChange={onChange} id={id}>
        {selectOptions}
      </select>
    </div>
  );
};

SelectInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SelectInputGroup;
