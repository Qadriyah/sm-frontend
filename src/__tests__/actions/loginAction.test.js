import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loginUser } from "../../actions/loginAction";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Test the loginAction", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("Should login successfully", () => {
    const expectedResponse = {
      success: true,
      token: "gsghhBKJSJBKJBjjsjs.ksbjxhjNjsbjkbskjbs.mxbxjHXJ",
    };
    const user = {
      username: "admin",
      password: "admin",
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    store.dispatch(loginUser(user)).then((response) => {
      expect(response.data).toEqual(1);
    });
  });
});
