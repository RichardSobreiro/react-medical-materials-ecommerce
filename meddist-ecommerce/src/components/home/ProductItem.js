/** @format */
import React from "react";

import classes from "./ProductItem.module.css";
import medicineImage from "../../images/p-1.jpg";

const ProductItem = (props) => {
  return (
    <article className={classes["product-item-container"]}>
      <div className={classes["image-container"]}>
        <img src={medicineImage} alt="Medicine illustration" />
      </div>
      <div className={classes["product-description-container"]}>
        <h3>{props.product.name}</h3>
        <p>{props.product.description}</p>
      </div>
    </article>
  );
};

export default React.memo(ProductItem);
