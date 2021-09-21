import fetchAddTransaction from "../../providers/transaction/fetchAddTransaction";
import fetchEditItem from "../../providers/budget/fetchEditItem";

export const addAccount = (name) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    dispatch({ type: "ADD_ACCOUNT", name });
  };
};

export const addTransaction = (transaction, item) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    if (typeof item === "object") {
      transaction.transaction.budget_id = item.id;
      fetchAddTransaction(transaction).then((data) => {
        if (data.status !== 500) {
          const transaction = data.transaction;
          transaction.manifests = data.manifests;
          dispatch({ type: "ADD_TRANSACTION", transaction });
          fetchEditItem(item).then((data) => {
            data.status !== 500
              ? dispatch({ type: "EDIT_ITEM", item: data.budget })
              : dispatch({ type: "BUDGET_ERROR" });
          });
        } else {
          dispatch({ type: "TRANSACTION_ERROR" });
        }
      });
    } else {
      fetchAddTransaction(transaction).then((data) => {
        if (data.status !== 500) {
          const transaction = data.transaction;
          transaction.manifests = data.manifests;
          dispatch({ type: "ADD_TRANSACTION", transaction });
        } else {
          dispatch({ type: "TRANSACTION_ERROR" });
        }
      });
    }
  };
};
