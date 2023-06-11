import { ProductCardProps } from "../types";
import { Card, Image, Name, Price } from "./styles";

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, image } = product;
  return (
    <Card>
      <Image src={image} alt={title} />
      <Name>{title}</Name>
      <Price>${price.toFixed(2)}</Price>
    </Card>
  );
};

export default ProductCard;
