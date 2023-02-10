/** @format */
import { Outlet } from "react-router-dom";
import OrdersNavigation from "../components/orders/OrdersNavigation";

const OrdersRootLayout = () => {
  return (
    <>
      <OrdersNavigation></OrdersNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default OrdersRootLayout;
