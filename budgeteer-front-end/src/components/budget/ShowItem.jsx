import React from "react";

const ShowItem = ({ item }) => {
  return (
    <>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{item.cost_per_month}</td>
      <td>{item.assign_money}</td>
      <td></td>
    </>
  );
};

export default ShowItem;
