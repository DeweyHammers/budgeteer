const budget = {
  budget: [],
  categories: [],
  budget_loading: false,
  budget_errors: false,
};

const budgetReducers = (state = budget, action) => {
  switch (action.type) {
    case "BUDGET_LOADING":
      return {
        ...state,
        budget_loading: true,
      };
    case "GET_BUDGET":
      const sortedItems = action.budget.sort((a, b) => a.id - b.id);
      return {
        ...state,
        budget: sortedItems,
      };
    case "LOAD_BUDGET_CATEGORIES":
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
        budget_loading: false,
        budget_errors: false,
      };
    case "EDIT_ITEM":
      return {
        ...state,
        budget: [
          ...state.budget.map((item) => {
            if (item.id === action.item.id) {
              return {
                ...item,
                name: action.item.name,
                amount: action.item.amount,
                cost_per_month: action.item.cost_per_month,
                assign_money: action.item.assign_money,
              };
            } else {
              return item;
            }
          }),
        ],
        budget_loading: false,
        budget_errors: false,
      };
    case "EDIT_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories.map((category) =>
            category === action.category ? action.name : category
          ),
        ],
        budget_loading: false,
        budget_errors: false,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        budget: [...state.budget.filter((item) => item.id !== action.id)],
        budget_loading: false,
        budget_errors: false,
      };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (category) => category !== action.category
          ),
        ],
        budget_loading: false,
        budget_errors: false,
      };
    case "CLEAR_BUDGET":
      return {
        budget: [],
        categories: [],
        budget_loading: false,
        budget_errors: false,
      };
    case "BUDGET_ERROR":
      return {
        ...state,
        budget_loading: false,
        budget_errors: action.errors,
      };
    case "CLOSE_BUDGET_ERROR":
      return {
        ...state,
        budget_errors: false,
      };
    default:
      return state;
  }
};

export default budgetReducers;
