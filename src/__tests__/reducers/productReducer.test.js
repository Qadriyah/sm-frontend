import productReducer from "../../reducers/productReducer";
import {
  LOADING, POST_DATA, GET_PRODUCTS, ADD_PRODUCT, GET_PRODUCT,
} from "../../actions/types";

describe("Test productReducer", () => {
  const initialState = {
    loading: false,
    loader: false,
    message: "",
    products: [],
    product: {},
  };
  test("LOADING action", () => {
    const expectedAction = {
      type: LOADING,
    };
    const action = productReducer(initialState, expectedAction);
    expect(action.loading).toBe(true);
  });

  test("POST_DATA action", () => {
    const expectedAction = {
      type: POST_DATA,
    };
    const action = productReducer(initialState, expectedAction);
    expect(action.loader).toBe(true);
  });

  test("GET_PRODUCTS action", () => {
    const data = [
      {
        id: 1,
        name: "LG 32",
        price: 10000,
      },
    ];
    const expectedAction = {
      type: GET_PRODUCTS,
      payload: data,
    };
    const action = productReducer(initialState, expectedAction);
    expect(action.products[0].price).toEqual(10000);
  });

  test("ADD_PRODUCT action", () => {
    const expectedAction = {
      type: ADD_PRODUCT,
      payload: "Success",
    };
    const action = productReducer(initialState, expectedAction);
    expect(action.message).toEqual("Success");
  });

  test("GET_PRODUCT action", () => {
    const data = {
      id: 1,
      name: "LG 32",
      price: 10000,
    };
    const expectedAction = {
      type: GET_PRODUCT,
      payload: data,
    };
    const action = productReducer(initialState, expectedAction);
    expect(action.product.name).toEqual("LG 32");
  });

  test("default action", () => {
    const action = productReducer(initialState, {});
    expect(action.loading).toBe(false);
    expect(action.loader).toBe(false);
  });
});
