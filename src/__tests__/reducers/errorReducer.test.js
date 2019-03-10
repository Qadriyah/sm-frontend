import errorReducer from "../../reducers/errorReducer";
import { ERRORS } from "../../actions/types";

describe("Test the errorReducer", () => {
  const initialState = {
    errors: {},
  };
  test("ERRORS action", () => {
    const expectedAction = {
      type: ERRORS,
      payload: { username: ["This field is required"] },
    };
    const action = errorReducer(initialState, expectedAction);
    expect(action.errors).toEqual({ username: ["This field is required"] });
  });

  test("default action", () => {
    const action = errorReducer(initialState, {});
    expect(action.errors).toEqual({});
  });
});
