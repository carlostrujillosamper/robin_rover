import React from "react";
import renderer from "react-test-renderer";


import FavouriteList from "../src/screens/FavouriteList";

jest.useFakeTimers()



beforeAll(() => {
    jest.mock("@react-native-community/async-storage");
  });


describe("<FavouriteList />", () => {
  it("has 1 children", () => {
    const tree = renderer.create(<FavouriteList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<FavouriteList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
