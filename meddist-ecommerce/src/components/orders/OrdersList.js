/** @format */
import React from "react";

import OrderItem from "./OrderItem";

const OrdersList = (props) => {
  return (
    <>
      {props.orders.map((order) => {
        return <OrderItem key={order.id} order={order}></OrderItem>;
      })}
    </>
  );
};

export default React.memo(OrdersList);
