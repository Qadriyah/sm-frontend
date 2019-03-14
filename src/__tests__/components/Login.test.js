import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../components/auth/Login";

describe("Test the Login component", () => {
  const initialState = {
    username: "",
    password: "",
    errors: {},
  };
  const props = {
    errors: {},
    loginUser: jest.fn(),
    auth: {
      loading: false,
      isAutheticated: false,
    },
    history: { push: jest.fn() },
  };
  const wrapper = shallow(<Login {...props} />);
  wrapper.setState(initialState);

  test("Should render without errors", () => {
    const loginForm = wrapper.find(".login-form");
    expect(loginForm.length).toBe(1);
  });

  test("Should submit the form", () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({
      username: "admin",
      password: "admin",
    });
    wrapper.instance().onSubmit(event);
    expect(wrapper.instance().props.loginUser).toHaveBeenCalled();
  });

  test("componentWillReceiveProps life cycle method", () => {
    const nextProps = {
      errors: { username: ["This field is required"] },
      auth: { isAutheticated: true },
    };
    wrapper.instance().props.auth.isAutheticated = true;
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state().errors).toEqual({ username: ["This field is required"] });
  });

  test("onChange function", () => {
    const event = {
      target: { name: "username", value: "Baker" },
    };
    wrapper.instance().onChange(event);
    expect(wrapper.state().username).toEqual("Baker");
  });
});
