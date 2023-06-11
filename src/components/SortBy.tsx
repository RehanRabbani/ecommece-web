import React, { useState } from "react";
import { SortByProps } from "../types";
import { SortContainer, Label, Select } from "./styles";

const SortBy: React.FC<SortByProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    console.log(value, "value___");
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <SortContainer>
      <Label htmlFor="sortBy">Sort By:</Label>
      <Select
        id="sortBy"
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SortContainer>
  );
};

export default SortBy;
