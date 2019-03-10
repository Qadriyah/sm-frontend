import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

describe("Test setAuthToken function", () => {
  test("Should add token to axios if token is not false", () => {
    const token = "fghhDGHgsHHGjmjnjhSGUJVHjkgiugsKB.SHVJjjbkjhsl.djhjhjdhhj";
    setAuthToken(token);
    expect(axios.defaults.headers.common.Authorization).toEqual(`Bearer ${token}`);
  });

  test("Should remove Authorization header from axios if token is false", () => {
    setAuthToken(false);
    expect(axios.defaults.headers.common.Authorization).toBe(undefined);
  });
});
