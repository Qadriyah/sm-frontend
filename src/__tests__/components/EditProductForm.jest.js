import React from "react";
import { shallow } from "enzyme";
import { EditProductForm } from "../../components/forms/EditProductForm";

describe("Test EditProductForm component", () => {
  const initialState = {
    productName: "",
    productPrice: "",
    category: "",
    categoryName: "",
    productId: "",
    errors: {},
  };
  const props = {
    categories: { categories: { categories: {} } },
    errors: {},
    loader: false,
    editProduct: jest.fn(),
    options: [],
    value: 0,
  };
  const wrapper = shallow(<EditProductForm {...props} />);
  wrapper.setState(initialState);
  test("Should render without errors", () => {
    const select = wrapper.find("[data-test='component-select-input']");
    expect(select.length).toBe(1);
  });

  test("Should submit the form", () => {
    const mockEevent = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().onSubmit(mockEevent);
    expect(wrapper.instance().props.editProduct).toHaveBeenCalled();
  });

  test("componentWillReceiveProps", () => {
    const nextProps = {
      errors: {
        errors: { error: "Failed" },
      },
      products: {
        product: {
          products: [
            {
              id: 1,
              cid: 7,
              product_name: "LG 32",
              category_name: "TV",
              product_price: 1000,
            },
          ],
        },
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.instance().state.productName).toEqual("LG 32");
  });
});
