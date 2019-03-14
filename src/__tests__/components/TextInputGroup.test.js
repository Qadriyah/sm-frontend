import React from "react";
import { shallow } from "enzyme";
import TextInputGroup from "../../components/common/TextInputGroup";

describe("Test TextInputGroup component", () => {
  const props = {
    name: "username",
    id: "name",
    placeholder: "Username...",
    label: "Username:",
    onChange: jest.fn(),
    type: "text",
    value: "Baker",
  };
  test("Should render without errors", () => {
    const wrapper = shallow(<TextInputGroup {...props} />);
    const inputField = wrapper.find("[data-test='component-input-field']");
    expect(inputField.length).toBe(1);
  });
});
