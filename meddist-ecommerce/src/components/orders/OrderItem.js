/** @format */
import ProductItem from "../../components/home/ProductItem";

import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["order-area"]}>
        <h3 className={classes["order-area-title"]}>Order</h3>
        <hr></hr>
        <div className={classes["order-items"]}>
          {props.order.products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                shouldRenderActions={false}
              ></ProductItem>
            );
          })}
        </div>
      </div>
      <div className={classes["payment-area"]}>
        <h3 className={classes["payment-area-title"]}>Payment Summary</h3>
        <hr></hr>
        <div className={classes["payment-area-line"]}>
          <p>Order Summary: </p>
          <p>$ {props.order.totalPrice.toFixed(2)}</p>
        </div>
        <div className={classes["payment-area-line"]}>
          <p>Delivery Price: </p>
          <p>$ 20</p>
        </div>
        <hr></hr>
        <div className={classes["payment-area-line"]}>
          <h3>Order Total: </h3>
          <h3>$ {props.order.totalPrice}</h3>
        </div>
        <div className={classes["payment-area-line"]}>
          <h3>Created At: </h3>
          <h3>
            {new Date(Date.parse(props.order.orderedAt)).toLocaleDateString()}{" "}
            {new Date(Date.parse(props.order.orderedAt)).toLocaleTimeString()}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
