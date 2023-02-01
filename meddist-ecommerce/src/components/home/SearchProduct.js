/** @format */
import { useEffect, useRef, useState } from "react";

import searchIcon from "../../images/search-icon.png";
import classes from "./SearchProduct.module.css";

const SearchProduct = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef("");
  const { applyProducts, fetchProducts } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.target && enteredFilter === inputRef.target.value) {
        fetchProducts({ url: "http://localhost:8000/products" }, applyProducts);
      }
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, applyProducts, fetchProducts]);

  return (
    <div className={classes["search-container"]}>
      <form className={classes["search-form"]}>
        <input
          ref={inputRef}
          value={enteredFilter}
          onChange={(event) => setEnteredFilter(event.target.value)}
          type="text"
          placeholder="Search Product"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="Search"></img>
        </button>
      </form>
    </div>
  );
};

export default SearchProduct;
