import React from "react";
import { shallow } from "enzyme";
import { AdminDashboard } from "../../components/admin/AdminDashboard";

describe("Test AdminDashboard component", () => {
  const props = {
    getCategories: jest.fn(),
    auth: {},
    logout: jest.fn(),
    getProducts: jest.fn(),
    drawer: { isOpen: null },
  };
  const wrapper = shallow(<AdminDashboard {...props} />);

  test("Should render without errors", () => {
    const elements = wrapper.find(".container-one");
    expect(elements.length).toBe(1);
  });

  test("onLogout function", () => {
    wrapper.instance().onLogout();
    expect(wrapper.instance().props.logout).toHaveBeenCalled();
  });
});
