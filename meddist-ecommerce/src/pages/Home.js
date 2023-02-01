/** @format */

import { useState, useEffect } from "react";
import ProductsList from "../components/home/ProductsList";
import SearchProduct from "../components/home/SearchProduct";

import useHttp from "../hooks/useHttp";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    fetchProducts({ url: "http://localhost:8000/products" }, setProducts);
  }, [fetchProducts]);

  return (
    <>
      <SearchProduct
        onFetchProducts={fetchProducts}
        applyProducts={setProducts}
        loading={isLoading}
        error={error}
      />
      <ProductsList productsList={products} />
    </>
  );
};

export default HomePage;
