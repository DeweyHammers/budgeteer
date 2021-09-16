import React from "react";
import Category from "../../components/budget/Category";

const CategoriesContainer = ({ categories, items }) => {
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

  return (
    <div>
      <h3>Your budget Items</h3>
      {renderCategories()}
    </div>
  );
};

export default CategoriesContainer;
