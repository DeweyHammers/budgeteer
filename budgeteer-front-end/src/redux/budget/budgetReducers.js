const budget = { budget: [], loading: false, errors: false };

const budgetReducers = (state = budget, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: action.budget,
      };
    case "ADD_ITEM":
      return {
        ...state,
        budget: [...state.budget, action.item],
        loading: false,
        errors: false,
      };
    case "BUDGER_ERROR":
      return {
        ...state,
        loading: false,
        errors: true,
      };
    default:
      return state;
  }
};

export default budgetReducers;
