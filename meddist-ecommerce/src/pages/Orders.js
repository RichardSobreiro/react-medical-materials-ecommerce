/** @format */
import { Suspense } from "react";
import { json, defer, Await, useRouteLoaderData } from "react-router-dom";

import OrdersList from "../components/orders/OrdersList";
import Loader from "../UI/Loader/Loader";

const Orders = () => {
  const { orders } = useRouteLoaderData("orders");
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Await resolve={orders}>
        <OrdersList orders={orders}></OrdersList>
      </Await>
    </Suspense>
  );
};

export default Orders;

async function loadOrders() {
  const response = await fetch("http://localhost:8000/orders");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch orders." },
      {
        status: 500,
      }
    );
  } else {
    const orders = await response.json();
    return orders;
  }
}

export async function loader({ request, params }) {
  return defer({
    orders: await loadOrders(),
  });
}
