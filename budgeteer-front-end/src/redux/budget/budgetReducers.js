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
        loading: false,
        errors: false,
      };
    case "EDIT_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories.map((category) =>
            category === action.category ? action.name : category
          ),
        ],
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
    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories.filter(
            (category) => category !== action.category
          ),
        ],
      };
    case "CLEAR_BUDGET":
      return { budget: [], categories: [], loading: false, errors: false };
    case "BUDGET_ERROR":
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
