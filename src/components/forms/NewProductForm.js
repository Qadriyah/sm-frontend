import React from "react";
import PropTypes from "prop-types";
import TextInputGroup from "../common/TextInputGroup";
import SelectInputGroup from "../common/SelectInputGroup";

const NewProductForm = ({
  onSubmit, category, onChange, options, productName, productPrice,
}) => (
  <form onSubmit={onSubmit} id="bform">
    <SelectInputGroup
      name="categoryId"
      value={category}
      onChange={onChange}
      options={options}
      id="categoryId"
      label="Category:"
    />
    <TextInputGroup
      name="productName"
      id="productName"
      placeholder="Product Name"
      label="Product Name:"
      onChange={onChange}
      value={productName}
    />
    <TextInputGroup
      name="productPrice"
      id="productPrice"
      placeholder="Product Price"
      label="Product Price:"
      onChange={onChange}
      value={productPrice}
    />
    <input type="submit" name="submit" value="Submit" className="wide-btn" />
  </form>
);

NewProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default NewProductForm;
