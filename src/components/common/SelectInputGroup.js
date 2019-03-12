import React from "react";
import PropTypes from "prop-types";

const SelectInputGroup = ({
  name, onChange, options, id, label, value, displayText,
}) => {
  const selectOptions = options.map(option => (
    <option key={option.id} value={option.id}>
      {option.category_name}
    </option>
  ));
  selectOptions.push(
    <option key={0} selected value={value} disabled>
      {displayText}
    </option>,
  );
  return (
    <div className="form-group">
      <div className="font-weight-bold text-left">{label}</div>
      <select
        className="form-control"
        name={name}
        onChange={onChange}
        id={id}
        data-test="component-select-field"
      >
        {selectOptions}
      </select>
    </div>
  );
};

SelectInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  displayText: PropTypes.string.isRequired,
};

export default SelectInputGroup;
