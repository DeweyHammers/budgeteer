import React from "react";
import Category from "../components/budget/Category";

const BudgetContainer = ({ categories, items }) => {
  const renderCategories = () => {
    return categories.map((category, index) => {
      return (
        <Category
          key={index}
          category={category}
          items={items.filter((item) => item.category === category)}
        />
      );
    });
  };

  return <div>{renderCategories()}</div>;
};

export default BudgetContainer;
