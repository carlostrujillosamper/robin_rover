import React from "react";
import renderer from "react-test-renderer";


import StoreList from "../src/screens/StoreList";

jest.useFakeTimers()



beforeAll(() => {
    jest.mock("@react-native-community/async-storage");
  });


describe("<StoreList />", () => {
  it("has 1 children", () => {
    const tree = renderer.create(<StoreList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<StoreList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
