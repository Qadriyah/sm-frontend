import moxios from "moxios";
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getSingleProduct,
} from "../../actions/productActions";
import store from "../../store";

describe("Test productActions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const expectedResponse = {
    loading: false,
    loader: false,
    message: "",
    product: {},
    products: {
      products: [
        {
          category_name: "Plastic Chairs",
          cid: 12,
          id: 7,
          product_name: "All Size",
          product_price: 60000,
        },
      ],
    },
  };
  const newProduct = {
    category_id: 12,
    product_name: "All Size",
    product_price: 60000,
  };

  test("getProduct action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(getProducts()).then(() => {
      const newState = store.getState();
      expect(newState.products.products).toEqual(expectedResponse);
    });
  });

  test("addProduct action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(addProduct(newProduct)).then(() => {
      const newState = store.getState();
      expect(newState.products.products).toEqual(expectedResponse);
      expect(newState.products.message).toBe("Product added successfully");
    });
  });

  test("deleteProduct action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(deleteProduct(7)).then(() => {
      const newState = store.getState();
      expect(newState.products.products).toEqual(expectedResponse);
    });
  });

  test("editProduct action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(editProduct(7, newProduct)).then(() => {
      const newState = store.getState();
      expect(newState.products.products).toEqual(expectedResponse);
    });
  });

  test("getSingleProduct action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(getSingleProduct(7)).then(() => {
      const newState = store.getState();
      expect(newState.products.products).toEqual(expectedResponse);
    });
  });
  test("addProduct failure action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: "Some fields are missing",
      });
    });
    return store.dispatch(addProduct()).then(() => {
      const newState = store.getState();
      expect(newState.errors.errors.error).toBe("Some fields are missing");
    });
  });

  test("deleteProduct failure action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: "Failed to delete",
      });
    });
    return store.dispatch(deleteProduct(7)).then(() => {
      const newState = store.getState();
      expect(newState.errors.errors.error).toBe("Failed to delete");
    });
  });

  test("editProduct failure action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: "Some fields are missing",
      });
    });
    return store.dispatch(editProduct()).then(() => {
      const newState = store.getState();
      expect(newState.errors.errors).toBe("Some fields are missing");
    });
  });

  test("getSingleProduct failure action", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: "Some fields are missing",
      });
    });
    return store.dispatch(getSingleProduct()).then(() => {
      const newState = store.getState();
      expect(newState.errors.errors).toBe("Some fields are missing");
    });
  });
});
