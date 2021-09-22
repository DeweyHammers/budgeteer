const transactions = {
  transactions: [],
  accounts: [],
  showAccount: false,
  loading_transactions: false,
  errors_transactions: false,
};

const transactionReducers = (state = transactions, action) => {
  switch (action.type) {
    case "LOADING_TRANSACTION":
      return {
        ...state,
        loading_transactions: true,
        errors_transactions: false,
      };
    case "GET_TRANSACTION":
      return {
        ...state,
        transactions: action.transactions,
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
        loading_transactions: false,
        errors_transactions: false,
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
        loading_transactions: false,
        errors_transactions: false,
      };
    case "EDIT_ACCOUNT":
      return {
        ...state,
        accounts: [
          ...state.accounts.map((account) =>
            account === action.account ? action.name : account
          ),
        ],
        loading_transactions: false,
        errors_transactions: false,
      };
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions.filter(
            (transaction) => transaction.id !== action.transaction.id
          ),
        ],
        loading_transactions: false,
        errors_transactions: false,
      };
    case "REMOVE_ACCOUNT":
      return {
        ...state,
        accounts: [
          ...state.accounts.filter((account) => account !== action.account),
        ],
        loading_transactions: false,
        errors_transactions: false,
      };
    case "CLEAR_TRANSACTION":
      return {
        ...state,
        transactions: [],
        accounts: [],
        loading_transactions: false,
        errors_transactions: false,
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        errors_transactions: true,
      };
    default:
      return state;
  }
};

export default transactionReducers;
