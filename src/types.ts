export interface Product {
  // [x: string]: any;
  id: number;
  price: number;
  image: string;
  category: "men's clothing";
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday";
  rating: { rate: number; count: number };
  title: string;
}

export interface NavLink {
  label: string;
  url: string;
}

export interface NavbarProps {
  links: NavLink[];
}

export interface ProductCardListProps {
  products: Product[];
  setProducts: (val: Product[]) => void;
}
export interface FilterProps {
  products: Product[];
  setProducts: (val: Product[]) => void;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductCardListProps {
  products: Product[];
}

export interface SortByOption {
  value: string;
  label: string;
}

export interface SortByProps {
  options: SortByOption[];
  onChange: (value: string) => void;
}
