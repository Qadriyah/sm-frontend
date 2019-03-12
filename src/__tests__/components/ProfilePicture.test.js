import React from "react";
import { shallow } from "enzyme";
import { ProfilePicture } from "../../components/admin/ProfilePicture";
import store from "../../store";

describe("Test ProfilePicture component", () => {
  const state = {
    isOpen: null,
  };
  const props = {
    auth: {
      user: {
        username: "Sekitoleko Baker",
      },
    },
  };
  const wrapper = shallow(<ProfilePicture {...props} />);
  wrapper.setState(state);

  test("Shouls render without errors", () => {
    const bars = wrapper.find(".fa-bars");
    expect(bars.length).toBe(1);
  });

  test("onOpen", () => {
    wrapper.instance().onOpen();
    expect(store.getState().drawer.isOpen).toEqual(true);
  });

  test("onClose", () => {
    wrapper.instance().onClose();
    expect(store.getState().drawer.isOpen).toEqual(false);
  });
});
