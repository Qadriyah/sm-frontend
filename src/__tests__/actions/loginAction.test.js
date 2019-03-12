import moxios from "moxios";
import store from "../../store";
import { loginUser, logout } from "../../actions/loginAction";

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
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDA0NzAyNDIsIm5iZiI6MTU0MDQ3MDI0MiwianRpIjoiZmQyZGRiMjQtNmRhNi00ODM3LThhMjgtOTQ4M2I1ZWJmYjJmIiwiZXhwIjoxNTQxMDc1MDQyLCJpZGVudGl0eSI6ImFkbWluIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsiaWQiOiJlOWU4M2M0NCIsIm5hbWUiOiJCYWtlciBTZWtpdG9sZWtvIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGVzIjoiYWRtaW4ifX0.Ok2sfPeiQ4K9XW3PVnzI-ju7vSSNd8QCir46MyVPR7w",
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
    return store.dispatch(loginUser(user)).then(() => {
      expect(store.getState().auth.isAuthenticated).toEqual(true);
    });
  });

  test("logout action", () => {
    store.dispatch(logout());
  });
});
