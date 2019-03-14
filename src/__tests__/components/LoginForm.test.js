import React from "react";
import { shallow } from "enzyme";
import LoginForm from "../../components/forms/LoginForm";

describe("Test LoginForm component", () => {
  const props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    username: "baker@andela.com",
    password: "Baker@33",
    loading: false,
    errors: {},
  };
  const wrapper = shallow(<LoginForm {...props} />);
  test("Should render text input field without errors", () => {
    const textInput = wrapper.find("#name");
    expect(textInput.length).toBe(1);
  });

  test("Should render password input field without errors", () => {
    const textInput = wrapper.find("#password");
    expect(textInput.length).toBe(1);
  });

  test("Should display a spinner if loading is true", () => {
    const component = shallow(<LoginForm {...props} />);
    component.setProps({ loading: true });
    const spinnerDisplay = component.find("[data-test='spinner-text']");
    expect(spinnerDisplay.text()).toEqual(" Please wait...");
  });

  test("Should display errors if error object is not empty", () => {
    wrapper.setProps({ errors: { username: ["This field is required"] } });
    const errorDisplay = wrapper.find(".error");
    expect(errorDisplay.text()).toEqual("Wrong username or password");
  });
});
