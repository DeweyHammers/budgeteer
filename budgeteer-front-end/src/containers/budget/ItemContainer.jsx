import React from "react";
import Item from "../../components/budget/Item";
import Category from "../../components/budget/Category";
import AddItem from "../../components/budget/AddItem";

const ItemContainer = ({
  items,
  categories,
  handleAddItem,
  handleShowAddItem,
  showAddItem,
}) => {
  const renderCategories = () => {
    return categories.map((category, index) => (
      <div key={index}>
        <h1>{category}</h1>
        <button onClick={handleShowAddItem}>Add Item</button>
        {showAddItem && <AddItem category={category} addItem={handleAddItem} />}
        <table>
          <thead>
            <Category />
          </thead>
          <tbody>{renderItems(category)}</tbody>
        </table>
      </div>
    ));
  };

  const renderItems = (category) => {
    return items.map(
      (item) => item.category === category && <Item key={item.id} item={item} />
    );
  };

  return (
    <div>
      <h3>Your budget Items</h3>
      {renderCategories()}
    </div>
  );
};

export default ItemContainer;
