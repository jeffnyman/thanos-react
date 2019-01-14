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

  it("will always render a div", () => {
    const divs = displayScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("given a rendered div", () => {
    it("will contain all rendered children", () => {
      const divs = displayScreen().find("div");
      expect(divs.length).toEqual(5);
      expect(divs.children().length).toEqual(4);
    });

    it("will always render a `DisplayTimer`", () => {
      expect(displayScreen().find(DisplayTimer).length).toBe(1);
    });

    describe("given a rendered `DisplayContent` and props", () => {
      beforeEach(() => {
        props.displayMessage = "Testing";
      });

      it("will always render a `DisplayContent`", () => {
        expect(displayScreen().find(DisplayContent).length).toBe(1);
      });
    });

    it("will never render a `DisplayContent` without props", () => {
      expect(displayScreen().find(DisplayContent).length).toBe(0);
    });

    it("will always render a `DisplayActivate`", () => {
      expect(displayScreen().find(DisplayActivate).length).toBe(1);
    });

    it("will always render a `Slider`", () => {
      expect(displayScreen().find(Slider).length).toBe(1);
    });
  });

  describe("given a rendered `DisplayTimer`", () => {
    beforeEach(() => {
      props.displayMessage = "Testing";
    });

		it("will not receive any props", () => {
			const displayTimer = displayScreen().find(DisplayTimer);
			expect(Object.keys(displayTimer.props()).length).toBe(0);
		});
  });
});
