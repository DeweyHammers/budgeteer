const transactions = {
  transactions: [],
  accounts: [],
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
        loading_transactions: false,
        errors_transactions: false,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
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
