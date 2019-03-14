import React from "react";
import { shallow } from "enzyme";
import { AdminContent } from "../../components/admin/AdminContent";

describe("Test AdminContent component", () => {
  const state = {
    toggleForm: false,
  };
  const props = {
    products: {
      products: {
        products: [
          {
            product_name: "LG 32",
            category_name: "TV",
            product_price: 1000,
            id: 1,
          },
        ],
      },
    },
    deleteProduct: jest.fn(),
    getSingleProduct: jest.fn(),
  };
  const wrapper = shallow(<AdminContent {...props} />);
  wrapper.setState(state);

  test("Should render without errors", () => {
    const div = wrapper.find(".content-one");
    expect(div.length).toBe(1);
  });

  test("onEditClick function", () => {
    wrapper.instance().onEditClick(1);
    expect(wrapper.instance().props.getSingleProduct).toHaveBeenCalled();
  });

  test("confirmationDialog function", () => {
    wrapper.instance().confirmationDialog(1);
  });
});
