import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextInputGroup from "../common/TextInputGroup";
import SelectInputGroup from "../common/SelectInputGroup";
import isEmpty from "../../utils/isEmpty";
import { editProduct } from "../../actions/productActions";

export class EditProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
      category: "",
      categoryName: "",
      productId: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.errors)) {
      this.setState({ errors: nextProps.errors.errors });
    }
    const { products } = nextProps.products.product;
    if (products) {
      this.setState({
        productName: products[0].product_name,
        productPrice: products[0].product_price,
        category: products[0].cid,
        categoryName: products[0].category_name,
        productId: products[0].id,
      });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const {
      productName, productPrice, category, productId,
    } = this.state;
    const produDetails = {
      category_id: Number(category),
      product_name: productName,
      product_price: Number(productPrice),
    };
    this.props.editProduct(productId, produDetails);
  };

  render() {
    const {
      productName, productPrice, errors, category, categoryName,
    } = this.state;
    const { categories, loader } = this.props;
    const options = categories.categories.categories;
    return (
      <form onSubmit={this.onSubmit} id="bform">
        <SelectInputGroup
          name="category"
          onChange={this.onChange}
          options={options || []}
          id="category"
          label="Category:"
          value={category}
          displayText={categoryName}
          data-test="component-select-input"
        />
        <TextInputGroup
          name="productName"
          id="productName"
          placeholder="Product Name"
          label="Product Name:"
          onChange={this.onChange}
          value={productName}
          data-test="component-text-input"
        />
        <TextInputGroup
          name="productPrice"
          id="productPrice"
          placeholder="Product Price"
          label="Product Price:"
          onChange={this.onChange}
          value={productPrice}
          data-test="component-integer-input"
        />
        <input type="submit" name="submit" value="Update" className="wide-btn" />
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

EditProductForm.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  loader: PropTypes.bool.isRequired,
  editProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  loader: state.products.loader,
  errors: state.errors,
  products: state.products,
});

export default connect(
  mapStateToProps,
  { editProduct },
)(EditProductForm);
