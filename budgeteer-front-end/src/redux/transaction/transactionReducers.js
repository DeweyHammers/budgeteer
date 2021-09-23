const transactions = {
  transactions: [],
  accounts: [],
  showAccount: false,
  transactions_loading: false,
  transactions_errors: false,
};

const transactionReducers = (state = transactions, action) => {
  switch (action.type) {
    case "TRANSACTION_LOADING":
      return {
        ...state,
        transactions_loading: true,
        transactions_errors: false,
      };
    case "GET_TRANSACTION":
      const sortedTransactions = action.transactions.sort(
        (a, b) => a.id - b.id
      );
      return {
        ...state,
        transactions: sortedTransactions,
      };
    case "LOAD_TRANSACTION_ACCOUNTS": {
      const accounts = state.transactions.map(
        (transaction) => transaction.account
      );
      return {
        ...state,
        accounts: [
          ...accounts.filter((item, index) => accounts.indexOf(item) === index),
        ],
      };
    }
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [...state.accounts, action.name],
      };
    case "ADD_SHOW_ACCOUNT":
      const account = state.accounts.filter(
        (account) => account === action.name
      )[0];
      return {
        ...state,
        showAccount: account,
      };
    case "REMOVE_SHOW_ACCOUNT":
      return {
        ...state,
        showAccount: false,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions.map((transaction) => {
            if (transaction.id === action.transaction.id) {
              return {
                ...transaction,
                name: action.transaction.name,
                account: action.transaction.account,
              };
            } else {
              return transaction;
            }
          }),
        ],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "EDIT_ACCOUNT":
      return {
        ...state,
        accounts: [
          ...state.accounts.map((account) =>
            account === action.account ? action.name : account
          ),
        ],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (transaction) => transaction.id !== action.transaction.id
          ),
        ],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "REMOVE_ACCOUNT":
      return {
        ...state,
        accounts: [
          ...state.accounts.filter((account) => account !== action.account),
        ],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "CLEAR_TRANSACTION":
      return {
        ...state,
        transactions: [],
        accounts: [],
        transactions_loading: false,
        transactions_errors: false,
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        transactions_loading: false,
        transactions_errors: action.errors,
      };
    case "CLOSE_TRANSACTION_ERROR":
      return {
        ...state,
        transactions_errors: false,
      };
    default:
      return state;
  }
};

export default transactionReducers;
