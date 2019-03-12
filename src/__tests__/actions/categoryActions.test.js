import moxios from "moxios";
import store from "../../store";
import { getCategories } from "../../actions/categoryActions";

describe("Test categoryActions", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("getCategories action", () => {
    const expectedResponse = {
      categories: [
        {
          id: 1,
          category_name: "Wall Units",
        },
      ],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    return store.dispatch(getCategories()).then(() => {
      expect(store.getState().categories.categories.categories.length).toBe(1);
    });
  });
});
