/** @format */
import React from "react";

import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
  return (
    <>
      <div className={classes["products-list-container"]}>
        {props.productsList && props.productsList.length > 0 ? (
          props.productsList.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })
        ) : (
          <h6>No products found!</h6>
        )}
      </div>
    </>
  );
};

export default ProductsList;
