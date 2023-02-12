/** @format */
import React, { useEffect, useRef, useState } from "react";
import config from "../../config.json";

import searchIcon from "../../images/search-icon.png";
import classes from "./SearchProduct.module.css";

const SearchProduct = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef("");
  const { applyProducts, onFetchProducts } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0 ? "" : `?name_like=${enteredFilter}`;
        onFetchProducts(
          { url: `${config.REACT_APP_SERVER_URL}/products${query}` },
          applyProducts
        );
      }
    }, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, applyProducts, onFetchProducts]);

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

export default React.memo(SearchProduct);
