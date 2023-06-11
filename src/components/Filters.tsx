import { useState } from "react";
import { FilterProps } from "../types";
import { FilterContainer, FilterSelect, FilterInput, Button } from "./styles";

const Filter = ({ products, setProducts }: FilterProps) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  const handleFilter = () => {
    const parsedMinPrice = minPrice ? parseFloat(minPrice) : 0;
    const parsedMaxPrice = maxPrice ? parseFloat(maxPrice) : Infinity;
    const filteredProducts = products.filter((product) => {
      const isInSelectedCategory = category
        ? product.category === category
        : true;
      const isInPriceRange =
        product.price >= parsedMinPrice && product.price <= parsedMaxPrice;
      const hasMinRating = minRating
        ? product.rating.rate >= parseFloat(minRating)
        : true;

      return isInSelectedCategory && isInPriceRange && hasMinRating;
    });
    setProducts(filteredProducts);
  };

  const productCategory = products?.map((item) => item.category);
  const getSameCategory = productCategory?.filter(
    (item, index) => productCategory.indexOf(item) === index
  );

  return (
    <FilterContainer>
      <FilterSelect
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <>
          <option value="">All Categories</option>;
          {getSameCategory?.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </>
      </FilterSelect>
      <FilterInput
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <FilterInput
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <FilterInput
        type="number"
        placeholder="Min Rating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />
      <Button onClick={handleFilter}>Filter</Button>
    </FilterContainer>
  );
};

export default Filter;
