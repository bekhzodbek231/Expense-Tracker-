import React from "react";
import categories from "../categories";

interface Prop {
  onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Prop) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategories(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
export default ExpenseFilter;
