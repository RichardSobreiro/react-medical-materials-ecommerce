/** @format */

import { useState } from "react";

import ProductsList from "../components/home/ProductsList";
import SearchProduct from "../components/home/SearchProduct";

import useHttp from "../hooks/useHttp";
import Loader from "../UI/Loader/Loader";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  return (
    <>
      <SearchProduct
        onFetchProducts={fetchProducts}
        applyProducts={setProducts}
        loading={isLoading}
        error={error}
      />
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <ProductsList productsList={products} error={error} />
      )}
    </>
  );
};

export default HomePage;
