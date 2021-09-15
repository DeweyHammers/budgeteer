import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/budget/budgetActions";

const BudgetItem = ({ item, removeItem }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.cost_per_month}</td>
      <td>{item.assign_money}</td>
      <button onClick={() => removeItem(item.id)}>X</button>
    </tr>
  );
};

export default connect(null, { removeItem })(BudgetItem);
