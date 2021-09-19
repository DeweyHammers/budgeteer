const transactions = {
  transactions: [],
  accounts: [],
  loading_transactions: false,
  errors_transactions: false,
};

const transactionsReducer = (state = transactions, action) => {
  switch (action.type) {
    case "LOADING_TRANSACTION":
      return {
        ...state,
        loading_transactions: true,
        errors_transactions: false,
      };
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [...state.accounts, action.name],
        loading_transactions: false,
        errors_transactions: false,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
