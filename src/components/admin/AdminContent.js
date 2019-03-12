import React from "react";
import PropTypes from "prop-types";
import NewProductForm from "../forms/NewProductForm";

const AdminContent = ({
  onSubmit,
  category,
  onChange,
  options,
  productName,
  productPrice,
  errors,
  loading,
}) => (
  <div className="content-one">
    <div className="inner-content">
      <h2>New Product</h2>
      <NewProductForm
        onSubmit={onSubmit}
        category={category}
        onChange={onChange}
        options={options}
        productName={productName}
        productPrice={productPrice}
        errors={errors}
        loading={loading}
      />
    </div>
    <div className="inner-content-one">
      <h2>Product Lists</h2>
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
        <tbody id="p-list" />
      </table>
    </div>
  </div>
);

AdminContent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AdminContent;
