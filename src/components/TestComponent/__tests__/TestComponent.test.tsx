import React from "react";
import { act, render, screen } from "@testing-library/react";
import { TestComponent } from "../TestComponent";

describe("Test Component Unit Tests", () => {
  test("should render itself without error", () => {
    const { debug } = render(<TestComponent />);

    // debug();
    const component = screen.queryByTestId("testcomponent-root");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });

  test("should render value if provided as prop", () => {
    const { debug } = render(<TestComponent value="test" />);

    // debug();
    const component = screen.queryByTestId("testcomponent-value");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("test");
  });

  test("should execute onClick when provided as prop", () => {
    const onClickSpy = jest.fn();
    render(<TestComponent value="test" onClick={onClickSpy} />);

    const component = screen.getByTestId("testcomponent-root");
    act(() => {
      component.click();
    });

    expect(onClickSpy).toHaveBeenCalledWith("test");
  });
});
