const budget = { budget: [], categories: [], loading: false, errors: false };

const budgetReducers = (state = budget, action) => {
  switch (action.type) {
    case "LOADING_BUDGET":
      return {
        ...state,
        loading: true,
      };
    case "ADD_BUDGET":
      return {
        ...state,
        budget: action.budget,
      };
    case "LOAD_CATEGORIES":
      const categories = state.budget.map((item) => item.category);
      return {
        ...state,
        categories: [
          ...categories.filter(
            (item, index) => categories.indexOf(item) === index
          ),
        ],
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.name],
      };
    case "ADD_ITEM":
      return {
        ...state,
        budget: [...state.budget, action.item],
        loading: false,
        errors: false,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        budget: [...state.budget.filter((item) => item.id !== action.id)],
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
