import React, { Fragment } from "react";
import Transaction from "../components/transaction/Transaction";

const TransactionContainer = ({ transactions, budget }) => {
  const renderTransaction = () => {
    return transactions.map((transaction) => {
      let item = {};
      if (transaction.manifests.length !== 0) {
        item = budget.filter(
          (i) => transaction.manifests[0].budget_id === i.id
        )[0];
      } else {
        item = { name: transaction.account };
      }
      return (
        <Transaction
          key={transaction.id}
          item={item}
          transaction={transaction}
        />
      );
    });
  };

  return <Fragment>{renderTransaction()}</Fragment>;
};

export default TransactionContainer;
