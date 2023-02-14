/** @format */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

import SearchProduct from "./SearchProduct";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Search component", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
    jest.useRealTimers();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    cart: [],
    totalPrice: 0,
  };

  test("is rendering", async () => {
    // Arrange
    render(
      <Router>
        <SearchProduct
          applyProducts={() => {}}
          onFetchProducts={async () => {}}
        />
      </Router>
    );

    // Act

    // Assert
    const input = screen.getByTestId("search-products");
    expect(input).toBeInTheDocument();
  });

  test("is triggring search function", async () => {
    // Arrange
    jest.useFakeTimers();
    const onFetchProducts = jest.fn();
    render(
      <Router>
        <SearchProduct
          applyProducts={() => {}}
          onFetchProducts={onFetchProducts}
        />
      </Router>
    );

    // Act

    // Assert
    setTimeout(() => {
      const input = screen.getByTestId("search-products");
      expect(input).toBeInTheDocument();
      expect(onFetchProducts).toHaveBeenCalled();
    }, 1000);

    jest.runAllTimers();
  });

  test("on user typing triggers search function", async () => {
    // Arrange
    jest.useFakeTimers();
    const onFetchProducts = jest.fn();
    render(
      <Router>
        <SearchProduct
          applyProducts={() => {}}
          onFetchProducts={onFetchProducts}
        />
      </Router>
    );

    // Act
    const input = screen.getByTestId("search-products");
    userEvent.type(input, "Products 1");

    // Assert
    setTimeout(() => {
      expect(input).toBeInTheDocument();
      expect(onFetchProducts).toHaveBeenCalledTimes(2);
    }, 3000);
  });
});
