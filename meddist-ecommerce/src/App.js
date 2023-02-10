/** @format */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetail, {
  loader as productDetailLoader,
} from "./pages/ProductDetail";
import OrdersRootLayout from "./pages/OrdersRootLayout";
import Orders, { loader as loadOrders } from "./pages/Orders";
import NewOrder from "./pages/NewOrder";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        id: "home",
        element: <HomePage />,
      },
      {
        path: "products/:productId",
        id: "product-details",
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
      {
        path: "orders",
        element: <OrdersRootLayout />,
        children: [
          {
            index: true,
            id: "orders",
            element: <Orders></Orders>,
            loader: loadOrders,
          },
          {
            path: "new",
            element: <NewOrder></NewOrder>,
            //action: manipulateEventAction
          },
        ],
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
