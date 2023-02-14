/** @format */

import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

import ProductsList from "./ProductsList";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Rendering of Products List", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    cart: [],
    totalPrice: 0,
  };

  test("on Home Page Load (Zero Products)", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    // Act
    render(
      <Router>
        <ProductsList />
      </Router>
    );

    // Assert
    const headerElement = await screen.findByText("No products found!");
    expect(headerElement).toBeInTheDocument();
  });

  test("on Home Page Load (Two Products)", async () => {
    // Arrange
    const productsList = [
      {
        id: "p1",
        name: "Products 1",
        description: "Product 1 description",
        price: "9.99",
      },
      {
        id: "p2",
        name: "Products 2",
        description: "Product 2 description",
        price: "99.99",
      },
    ];

    // Act
    render(
      <Router>
        <ProductsList loading={false} productsList={productsList} />
      </Router>
    );

    // Assert
    const listProductItems = await screen.findAllByRole("article");
    expect(listProductItems).toHaveLength(2);
  });

  test("on Home Page Load (Four products)", async () => {
    // Arrange
    const productsList = [
      {
        id: "p1",
        name: "Products 1",
        description: "Product 1 description",
        price: "9.99",
      },
      {
        id: "p2",
        name: "Products 2",
        description: "Product 2 description",
        price: "99.99",
      },
      {
        id: "p3",
        name: "Products 3",
        description: "Product 3 description",
        price: "99.99",
      },
      {
        id: "p4",
        name: "Products 4",
        description: "Product 4 description",
        price: "99.99",
      },
    ];

    // Act
    render(
      <Router>
        <ProductsList loading={false} productsList={productsList} />
      </Router>
    );

    // Assert
    const listProductItems = await screen.findAllByRole("article");
    expect(listProductItems).toHaveLength(4);
  });
});
