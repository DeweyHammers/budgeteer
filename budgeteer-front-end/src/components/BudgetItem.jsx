import React from "react";

const BudgetItem = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.cost_per_month}</td>
      <td>{item.assign_money}</td>
      <button>X</button>
    </tr>
  );
};

export default BudgetItem;
