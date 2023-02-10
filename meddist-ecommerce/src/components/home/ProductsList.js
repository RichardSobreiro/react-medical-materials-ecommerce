/** @format */
import React from "react";

import ProductItem from "./ProductItem";
import Loader from "../../UI/Loader/Loader";

import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <>
      <div className={classes["products-list-container"]}>
        {props.productsList && props.productsList.length > 0 ? (
          props.productsList.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                shouldRenderActions={true}
              />
            );
          })
        ) : (
          <h6>No products found!</h6>
        )}
      </div>
    </>
  );
};

export default React.memo(ProductsList);
