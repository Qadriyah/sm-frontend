import React from "react";
import { shallow } from "enzyme";
import { AdminMenu } from "../../components/admin/AdminMenu";

describe("Test AdminMenu component", () => {
  const props = {
    onClick: jest.fn(),
    drawer: {
      isOpen: true,
    },
  };
  const wrapper = shallow(<AdminMenu {...props} />);

  test("Should render without errors", () => {
    const link = wrapper.find("Link");
    expect(link.length).toBe(6);
  });
});
