<!-- @format -->

# React 18 Application with Javascript

A React application constructed using version 18 and the most important hooks. The app uses a simple mock server deployed using Azure Web App. The first time the page load may take
approximately 2 minutes due to the warm-up time of the Azure Free Tier service plan.

## Structure

```
├── meddist-ecommerce
│   ├── src
│   │    ├── components --> all components that build up the pages
│   │    ├── hooks --> Some custom hooks like the hook for sending HTTP requests
│   │    ├── images --> Compressed images (size smaller than 10 MB to load instantaneously by React)
│   │    ├── pages --> Page components rendered using React Routes Dom
│   │    ├── store --> Slicer and Store responsible by the shopping cart (Redux)
│   │    ├── UI --> Somo components used throughout the app like Buttons, Modals, and etc
│   │    ├── App.js --> Is the main components where the page browser routes is created
│   ├── ...
│   ├── package.json
│   ├── package-lock.json
├── mockserver --> Code for the mock server constructed using Json-server package
```

## Highlights

### Redux

The shopping cart is entirely build using Redux. The persistence on the Local Storage of the cart uses the redux-persist package.

```
├── meddist-ecommerce
│   ├── src
│   │    ├── ...
│   │    ├── store --> Slicer and Store responsible by the shopping cart (Redux)
```

You can visit the source code following the folder structure above.

### Custom Hooks

```
├── meddist-ecommerce
│   ├── src
│   │    ├── ...
│   │    ├── hooks --> Some custom hooks like the hook for sending HTTP requests
```

The main idea behind custom hooks is the possibility of sharing logic without repeting code. To avoid repeting the code for sending simple HTTP requests the custom hook useHttp is available.

### Tests

Jest and the React Testing Library were used to build Unit Tests for the components. Following is the source code for the ProductItem component Unit Tests.

```
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
```

### CI/CD

Given the fact that the application does not use any server side rendering, that is, the applicationg is completely rendered on the client side, the hosting of the application uses Azure Static Web (low price). We could also use Azure Storage Account with Static Web Site Hosting enabled, but Azure Static Web gives us more flexibility and access for other features like Server Side capabilities using Azure Functions and Environment Variables.
The build and release of the application is available through two different approaches: Git Hub Actions and Azure DevOps. The Github Actions is available inside the actions tab within this Repo and the Azure DevOps project is available on the following links:

- [Build Pipeline](https://dev.azure.com/richardsobreiro/Personal%20Profile/_build?definitionId=23).
- [Release Pipeline](https://dev.azure.com/richardsobreiro/Personal%20Profile/_release?_a=releases&view=mine&definitionId=1).
