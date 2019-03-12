import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/layouts/Header";

describe("Test Header component", () => {
  test("Should render without errors", () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find("[data-test='component-header']");
    expect(logo.length).toBe(1);
  });
});
