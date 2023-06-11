import { Product } from "../types";
import { ProductListContainer } from "./styles";
import ProductCard from "../components/Card";

export interface ProductCardListProps {
  products: Product[];
}

const ProductCardList = ({ products }: ProductCardListProps) => {
  return (
    <ProductListContainer>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductListContainer>
  );
};

export default ProductCardList;
