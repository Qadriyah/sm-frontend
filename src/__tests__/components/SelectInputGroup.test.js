import React from "react";
import { shallow } from "enzyme";
import SelectInputGroup from "../../components/common/SelectInputGroup";

describe("Test SelectInputGroup component", () => {
  const props = {
    name: "username",
    id: "name",
    label: "Username:",
    onChange: jest.fn(),
    displayText: "Select category",
    value: 0,
    options: [
      {
        id: 1,
        category_name: "Wall Units",
      },
      {
        id: 4,
        category_name: "Sofas",
      },
    ],
  };
  test("Should render without errors", () => {
    const wrapper = shallow(<SelectInputGroup {...props} />);
    const inputField = wrapper.find("[data-test='component-select-field']");
    expect(inputField.length).toBe(1);
  });
});
