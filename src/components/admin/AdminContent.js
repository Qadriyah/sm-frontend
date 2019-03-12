import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewProductForm from "../forms/NewProductForm";
import EditProductForm from "../forms/EditProductForm";
import { deleteProduct, getSingleProduct } from "../../actions/productActions";

export class AdminContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false,
    };
  }

  onEditClick = (productId) => {
    this.setState({ toggleForm: !this.state.toggleForm });
    this.props.getSingleProduct(productId);
  };

  confirmationDialog = (productId) => {
    const option = window.confirm("Delete Product?");
    if (option) {
      this.props.deleteProduct(productId);
    }
  };

  render() {
    let listItems;
    const { products } = this.props;
    const productList = products.products.products;
    const { toggleForm } = this.state;
    if (productList) {
      listItems = productList.map((product, key) => (
        <tr key={product.id}>
          <td>{key + 1}</td>
          <td>{product.product_name}</td>
          <td>{product.category_name}</td>
          <td className="text-right">{product.product_price.toLocaleString()}</td>
          <td>
            <i
              className="fas fa-trash-alt trash mr-3"
              onClick={this.confirmationDialog.bind(this, product.id)}
            />
            <i className="fas fa-edit" onClick={this.onEditClick.bind(this, product.id)} />
          </td>
        </tr>
      ));
    }
    return (
      <div className="content-one">
        <div className="inner-content">
          <h2>New Product</h2>
          {!toggleForm ? <NewProductForm /> : <EditProductForm />}
        </div>
        <div className="inner-content-one">
          <h2>Product Lists</h2>
          {products.loading ? (
            <span>
              <i className="fas fa-circle-notch fa-spin text-info loader" />
              <span data-test="spinner-text"> Loading products...</span>
            </span>
          ) : (
            <table className="cart-items striped-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th className="align-right">Sales Price</th>
                  <th className="align-center">Action</th>
                </tr>
              </thead>
              <tbody id="p-list">{listItems}</tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

AdminContent.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
  deleteProduct: PropTypes.func.isRequired,
  getSingleProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  { deleteProduct, getSingleProduct },
)(AdminContent);
