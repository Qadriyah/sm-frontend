import isEmpty from "../../utils/isEmpty";

describe("Test isEmpty function", () => {
  test("Should return true if an object is emptyt", () => {
    const data = {};
    expect(isEmpty(data)).toEqual(true);
  });

  test("Should return false if an object is not empty", () => {
    const data = {
      firstName: "Baker",
      lastName: "Sekitoleko",
    };
    expect(isEmpty(data)).toEqual(false);
  });
});
