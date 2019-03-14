import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextInputGroup from "../common/TextInputGroup";
import SelectInputGroup from "../common/SelectInputGroup";
import isEmpty from "../../utils/isEmpty";
import { addProduct } from "../../actions/productActions";

class NewProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      category: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.errors)) {
      this.setState({ errors: nextProps.errors.errors });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { productName, productPrice, category } = this.state;
    const newProduct = {
      category_id: Number(category),
      product_name: productName,
      product_price: Number(productPrice),
    };
    this.props.addProduct(newProduct);
  };

  render() {
    const {
      productName, productPrice, category, errors,
    } = this.state;
    const { categories, loader } = this.props;
    const options = categories.categories.categories;

    return (
      <form onSubmit={this.onSubmit} id="bform">
        <SelectInputGroup
          name="category"
          value={category}
          onChange={this.onChange}
          options={options || []}
          id="category"
          label="Category:"
        />
        <TextInputGroup
          name="productName"
          id="productName"
          placeholder="Product Name"
          label="Product Name:"
          onChange={this.onChange}
          value={productName}
        />
        <TextInputGroup
          name="productPrice"
          id="productPrice"
          placeholder="Product Price"
          label="Product Price:"
          onChange={this.onChange}
          value={productPrice}
        />
        <input type="submit" name="submit" value="Submit" className="wide-btn" />
        <div className="mt-2 text-left">
          {loader ? (
            <span>
              <i className="fas fa-circle-notch fa-spin text-info loader" />
              <span data-test="spinner-text"> Please wait...</span>
            </span>
          ) : (
            <span className="error">{!isEmpty(errors) ? errors.error : ""}</span>
          )}
        </div>
      </form>
    );
  }
}

NewProductForm.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  loader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  loader: state.products.loader,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addProduct },
)(NewProductForm);
