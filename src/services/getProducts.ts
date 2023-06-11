import { useQuery } from "@tanstack/react-query";

const getProductsList = () => {
  const response = fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return response;
};

export const useProductDetails = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getProductsList,
    refetchOnWindowFocus: false,
  });
  return { data, isLoading };
};
