import fetchAddItem from "../../providers/budget/fetchAddItem";
import fetchRemoveItem from "../../providers/budget/fetchRemoveItem";

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

export const addCategory = ({ name }) => {
  return {
    type: "ADD_CATEGORY",
    name,
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BUDGET" });
    fetchRemoveItem(id).then(() => dispatch({ type: "REMOVE_ITEM", id }));
  };
};
