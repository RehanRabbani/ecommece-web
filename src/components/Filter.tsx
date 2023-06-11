import React, { useState } from "react";
import Filters from "./Filters";
import { ProductCardListProps } from "../types";
import { FilterButton, Drawer } from "./styles";

const FilterComponent = ({ products, setProducts }: ProductCardListProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <FilterButton onClick={toggleDrawer}>Open Filter</FilterButton>
      <Drawer isOpen={isDrawerOpen}>
        <Filters products={products} setProducts={setProducts} />
        {/* Filter options go here */}
        <button onClick={toggleDrawer}>Close Filter</button>
      </Drawer>
    </div>
  );
};

export default FilterComponent;
