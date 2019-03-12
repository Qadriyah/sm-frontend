import React from "react";
import { shallow } from "enzyme";
import { NewProductForm } from "../../components/forms/NewProductForm";

describe("Test NewProductForm component", () => {
  const initialState = {
    productName: "",
    productPrice: "",
    category: "",
    errors: {},
  };
  const props = {
    categories: { categories: { categories: {} } },
    errors: {},
    loader: false,
    addProduct: jest.fn(),
    options: [],
  };
  const wrapper = shallow(<NewProductForm {...props} />);
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
    expect(wrapper.instance().props.addProduct).toHaveBeenCalled();
  });

  test("componentWillReceiveProps", () => {
    const nextProps = {
      errors: {
        errors: { error: "Failed" },
      },
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.instance().state.errors.error).toEqual("Failed");
  });
});
