import React, { useEffect, useMemo } from "react";
import Header from "../components/Header";
import Navbar from "../components/Bar";
import SearchComponent from "../components/Search";
import FilterComponent from "../components/Filter";
import ProductCardList from "../components/ProductCardList";
import { ProductContainer } from "../components/styles";
import SortBy from "../components/SortBy";
import { useProductDetails } from "../services/getProducts";
import { Product } from "../types";

import { sortProducts, navLinks, sortOptions } from "../utils";

const ProductDetail = () => {
  const { data } = useProductDetails();
  const [products, setProducts] = React.useState<Product[]>([]);

  useMemo(() => {
    setProducts(data);
  }, [data]);

  const handleSearchSelect = (value: string) => {
    console.log("Selected:", value);
  };

  const handleSortChange = (value: string) => {
    console.log(value, "value");
    const res = sortProducts(products, value);

    const updatedProducts = [...res];
    setProducts(updatedProducts);
  };

  return (
    <>
      <Navbar links={navLinks} />
      <Header />
      <SearchComponent />
      <ProductContainer>
        <SortBy options={sortOptions} onChange={handleSortChange} />
        <FilterComponent products={data} setProducts={setProducts} />
      </ProductContainer>
      <ProductCardList products={products} />
    </>
  );
};

export default ProductDetail;
