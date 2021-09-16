import fetchAddItem from "../../providers/budget/fetchAddItem";
import fetchRemoveItem from "../../providers/budget/fetchRemoveItem";
import fetchEditItem from "../../providers/budget/fetchEditItem";

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BUDGET" });
    fetchAddItem(item).then((data) => {
      data.status !== 500
        ? dispatch({ type: "ADD_ITEM", item: data.budget })
        : dispatch({ type: "BUDGER_ERROR" });
    });
  };
};

export const editItem = (item) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BUDGET" });
    fetchEditItem(item).then((data) => {
      data.status !== 500
        ? dispatch({ type: "EDIT_ITEM", item: data.budget })
        : dispatch({ type: "BUDGER_ERROR" });
    });
  };
};

export const addCategory = ({ name }) => {
  return {
    type: "ADD_CATEGORY",
    name,
  };
};

export const removeItem = (item, category) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BUDGET" });
    fetchRemoveItem(item.id).then((data) => {
      if (data.status !== 500) {
        dispatch({ type: "REMOVE_ITEM", id: item.id });
        category.length === 1 &&
          dispatch({ type: "REMOVE_CATEGORY", category: item.category });
      } else {
        dispatch({ type: "BUDGER_ERROR" });
      }
    });
  };
};
