import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import DisplayScreen from './displayScreen';
import DisplayTimer from './displayTimer';
import DisplayContent from "./displayContent";
import DisplayActivate from './displayActivate';
import Slider from './displayActivate';

describe("DisplayScreen", () => {
  let props;
  let mountedDisplayScreen;

  const displayScreen = () => {
    if (!mountedDisplayScreen) {
      mountedDisplayScreen = mount(
        <DisplayScreen {...props} />
      );
    }
    return mountedDisplayScreen;
  };

  beforeEach(() => {
    props = {
      displayImage: undefined,
      displayMessage: undefined,
      onActivate: undefined,
    };

    mountedDisplayScreen = undefined;
  });

  describe("when `onActivate` is defined", () => {
    beforeEach(() => {
      props.onActivated = jest.fn();
    });

    it("sets `onSlide` prop of rendered `DisplayActivate` to value of `onActivate`", () => {
      const displayActivate = displayScreen().find(DisplayActivate);
      expect(displayActivate.props().onSlide).toBe(props.onActivate);
    });
  });

  describe("when `onActivate` is undefined", () => {
    it("sets `onSlide` prop of rendered `DisplayActivate` to undefined", () => {
      const displayActivate = displayScreen().find(DisplayActivate);
      expect(displayActivate.props().onSlide).not.toBeDefined();
    });
  });
});
