import React, { useState, useEffect } from "react";
import { Container, Input, ResultsList, ResultItem } from "./styles";
import { useProductDetails } from "../services/getProducts";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data } = useProductDetails();

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      const results = data?.filter((item: { title: string }) => {
        return (
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
      });

      data && setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <ResultsList>
        {searchResults.map((result: any) => (
          <ResultItem key={result.id}>{result.title}</ResultItem>
        ))}
      </ResultsList>
    </Container>
  );
};

export default SearchComponent;
