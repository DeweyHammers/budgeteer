import fetchAddTransaction from "../../providers/transaction/fetchAddTransaction";
import fetchEditTranscation from "../../providers/transaction/fetchEditTranscation";
import fetchRemoveTransaction from "../../providers/transaction/fetchRemoveTransaction";
import fetchEditItem from "../../providers/budget/fetchEditItem";
import fetchUpdateUser from "../../providers/user/fetchUpdateUser";

export const addAccount = (name) => {
  return { type: "ADD_ACCOUNT", name };
};

export const addShowAccount = (name) => {
  return { type: "ADD_SHOW_ACCOUNT", name };
};

export const removeShowAccount = () => {
  return { type: "REMOVE_SHOW_ACCOUNT" };
};

export const addTransaction = (transaction, item, user) => {
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
          user.assign_money += transaction.inflow;
          fetchUpdateUser(user).then((data) => {
            data.status !== 500
              ? dispatch({ type: "UPDATE_USER", user: data.user })
              : dispatch({ type: "USER_ERROR", errors: true });
          });
        } else {
          dispatch({ type: "TRANSACTION_ERROR" });
        }
      });
    }
  };
};

export const editTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    fetchEditTranscation(transaction).then((data) => {
      data.status !== 500
        ? dispatch({ type: "UPDATE_TRANSACTION", transaction })
        : dispatch({ type: "TRANSACTION_ERROR" });
    });
  };
};

export const editAccount = (name, account) => {
  return (dispatch) => {
    dispatch({ type: "EDIT_ACCOUNT", name, account });
    dispatch({ type: "ADD_SHOW_ACCOUNT", name });
  };
};

export const removeTransaction = (transaction) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    fetchRemoveTransaction(transaction).then((data) => {
      data.status !== 500
        ? dispatch({ type: "REMOVE_TRANSACTION", transaction })
        : dispatch({ type: "TRANSACTION_ERROR" });
    });
  };
};

export const removeAccount = (account, transactions) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    transactions.map((transaction) => {
      return fetchRemoveTransaction(transaction).then((data) => {
        if (data.state !== 500) {
          dispatch({ type: "REMOVE_ACCOUNT", account });
          dispatch({ type: "REMOVE_SHOW_ACCOUNT" });
        } else {
          dispatch({ type: "TRANSACTION_ERROR" });
        }
      });
    });
  };
};
