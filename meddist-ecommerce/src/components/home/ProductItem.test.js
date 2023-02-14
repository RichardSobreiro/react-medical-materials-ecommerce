/** @format */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import * as ourActions from "../../store/cartSlice";
import { MemoryRouter as Router } from "react-router-dom";

import ProductItem from "./ProductItem";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Product Item", () => {
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

  const importantAction = jest.spyOn(ourActions, "addToCart");

  const mockStore = {
    cart: [],
    totalPrice: 0,
  };

  test("is redenring on home page", async () => {
    const product = {
      id: "p1",
      name: "Products 1",
      description: "Product 1 description",
      price: "9.99",
    };

    render(
      <Router>
        <ProductItem
          product={product}
          shouldRenderActions={true}
          isDetailPage={false}
          imageStyle={null}
        />
      </Router>
    );

    const productElement = await screen.findByText("Products 1");
    expect(productElement).toBeInTheDocument();
    const incrementToCartButton = await screen.findByText("+");
    expect(incrementToCartButton).toBeInTheDocument();
    const decrementToCartButton = screen.queryByText("-", { exact: false });
    expect(decrementToCartButton).toBeNull();
    const removeFromCartButton = screen.queryByText("Remove", { exact: false });
    expect(removeFromCartButton).toBeNull();
    const detailsButton = screen.queryByText("Details", { exact: false });
    expect(detailsButton).toBeInTheDocument();
  });

  test("is redenring on details page", async () => {
    const product = {
      id: "p1",
      name: "Products 1",
      description: "Product 1 description",
      price: "9.99",
    };

    render(
      <Router>
        <ProductItem
          product={product}
          shouldRenderActions={true}
          isDetailPage={true}
          imageStyle={null}
        />
      </Router>
    );

    const productElement = await screen.findByText("Products 1");
    expect(productElement).toBeInTheDocument();
    const incrementToCartButton = await screen.findByText("+");
    expect(incrementToCartButton).toBeInTheDocument();
    const decrementToCartButton = screen.queryByText("-", { exact: false });
    expect(decrementToCartButton).toBeNull();
    const removeFromCartButton = screen.queryByText("Remove", { exact: false });
    expect(removeFromCartButton).toBeNull();
    const detailsButton = screen.queryByText("Details", { exact: false });
    expect(detailsButton).toBeNull();
  });

  test("is redenring on details page", async () => {
    const product = {
      id: "p1",
      name: "Products 1",
      description: "Product 1 description",
      price: "9.99",
    };

    render(
      <Router>
        <ProductItem
          product={product}
          shouldRenderActions={true}
          isDetailPage={true}
          imageStyle={null}
        />
      </Router>
    );

    const incrementToCartButton = await screen.findByText("+");
    userEvent.click(incrementToCartButton);

    expect(importantAction).toHaveBeenCalled();
  });
});
