import { LOADING, GET_CATEGORIES } from "../../actions/types";
import categoryReducer from "../../reducers/categoryReducer";

describe("Test categoryReducer", () => {
  const initialState = {
    loading: false,
    categories: [],
  };
  test("LOADING action", () => {
    const expectedAction = {
      type: LOADING,
    };
    const action = categoryReducer(initialState, expectedAction);
    expect(action.loading).toBe(true);
  });

  test("GET_CATEGORIES action", () => {
    const data = [
      {
        id: 1,
        name: "Beds",
      },
    ];
    const expectedAction = {
      type: GET_CATEGORIES,
      payload: data,
    };
    const action = categoryReducer(initialState, expectedAction);
    expect(action.categories).toEqual(data);
  });

  test("default action", () => {
    const action = categoryReducer(initialState, {});
    expect(action.loading).toBe(false);
  });
});
