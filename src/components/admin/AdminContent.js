import React from "react";
import PropTypes from "prop-types";
import NewProductForm from "../forms/NewProductForm";

const AdminContent = ({ products }) => {
  let listItems;
  const productList = products.products.products;
  if (productList) {
    listItems = productList.map((product, key) => (
      <tr key={product.id}>
        <td>{key + 1}</td>
        <td>{product.product_name}</td>
        <td>{product.category_name}</td>
        <td className="text-right">{product.product_price.toLocaleString()}</td>
        <td>
          <i className="fas fa-trash-alt trash mr-3" />
          <i className="fas fa-edit" />
        </td>
      </tr>
    ));
  }
  return (
    <div className="content-one">
      <div className="inner-content">
        <h2>New Product</h2>
        <NewProductForm />
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
};

AdminContent.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};

export default AdminContent;
