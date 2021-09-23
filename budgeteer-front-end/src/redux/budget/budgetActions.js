import fetchAddItem from "../../providers/budget/fetchAddItem";
import fetchRemoveItem from "../../providers/budget/fetchRemoveItem";
import fetchEditItem from "../../providers/budget/fetchEditItem";

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({ type: "BUDGET_LOADING" });
    fetchAddItem(item).then((data) => {
      data.status !== 500
        ? dispatch({ type: "ADD_ITEM", item: data.budget })
        : dispatch({ type: "BUDGET_ERROR", errors: data.errors });
    });
  };
};

export const editItem = (item) => {
  return (dispatch) => {
    dispatch({ type: "BUDGET_LOADING" });
    fetchEditItem(item).then((data) => {
      data.status !== 500
        ? dispatch({ type: "EDIT_ITEM", item: data.budget })
        : dispatch({ type: "BUDGET_ERROR", errors: data.errors });
    });
  };
};

export const addCategory = (name) => {
  return {
    type: "ADD_CATEGORY",
    name,
  };
};

export const editCategory = (category, name, items) => {
  return (dispatch) => {
    dispatch({ type: "BUDGET_LOADING" });
    items.map((item) => {
      const editItem = JSON.parse(JSON.stringify(item));
      editItem.category = name;
      return fetchEditItem(editItem).then((data) => {
        if (data.status !== 500) {
          dispatch({ type: "EDIT_CATEGORY", name, category });
        } else {
          dispatch({ type: "BUDGET_ERROR", errors: data.errors });
        }
      });
    });
  };
};

export const removeCategory = (category, items) => {
  return (dispatch) => {
    dispatch({ type: "BUDGET_LOADING" });
    items.map((item) =>
      fetchRemoveItem(item.id).then((data) => {
        if (data.status !== 500) {
          dispatch({ type: "REMOVE_CATEGORY", category });
          items.map((item) => dispatch({ type: "REMOVE_ITEM", id: item.id }));
        } else {
          dispatch({ type: "BUDGET_ERROR", errors: data.errors });
        }
      })
    );
  };
};

export const removeItem = (item, category) => {
  return (dispatch) => {
    dispatch({ type: "BUDGET_LOADING" });
    fetchRemoveItem(item.id).then((data) => {
      if (data.status !== 500) {
        dispatch({ type: "REMOVE_ITEM", id: item.id });
        category.length === 1 &&
          dispatch({ type: "REMOVE_CATEGORY", category: item.category });
      } else {
        dispatch({ type: "BUDGET_ERROR", errors: data.errors });
      }
    });
  };
};

export const closeBudgetError = () => {
  return {
    type: "CLOSE_BUDGET_ERROR",
  };
};
