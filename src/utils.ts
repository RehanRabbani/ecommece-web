export const sortProducts = (products: any[], sortBy: any) => {
  switch (sortBy) {
    case "based-selling":
      return products.sort((a, b) => b.rating.rate - a.rating.rate);
    case "alphabetical-az":
      return products.sort((a: { title: string }, b: { title: any }) =>
        a.title.localeCompare(b.title)
      );
    case "alphabetical-za":
      return products.sort((a: { title: any }, b: { title: string }) =>
        b.title.localeCompare(a.title)
      );
    case "price-low-high":
      return products.sort(
        (a: { price: number }, b: { price: number }) => a.price - b.price
      );
    case "price-high-low":
      return products.sort(
        (a: { price: number }, b: { price: number }) => b.price - a.price
      );
    default:
      return products;
  }
};

export const navLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];

export const sortOptions = [
  { value: "none", label: "None" },
  { value: "based-selling", label: "Best selling" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "alphabetical-az", label: "Name: A to Z" },
  { value: "alphabetical-za", label: "Name: Z to A" },
];
