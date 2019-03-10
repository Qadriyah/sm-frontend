import loginReducer from "../../reducers/loginReducer";
import { LOADING, LOGIN_SUCCESS } from "../../actions/types";

describe("Test the loginReducer", () => {
  const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
  };
  test("LOADING action", () => {
    const expectedAction = {
      type: LOADING,
    };
    const action = loginReducer(initialState, expectedAction);
    expect(action.loading).toBe(true);
  });

  test("LOGIN_SUCCESS action", () => {
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: {
        id: 1,
        email: "baker@andela.com",
      },
    };
    const action = loginReducer(initialState, expectedAction);
    expect(action.isAuthenticated).toBe(true);
    expect(action.loading).toBe(false);
  });

  test("default action", () => {
    const action = loginReducer(initialState, {});
    expect(action.loading).toBe(false);
  });
});
