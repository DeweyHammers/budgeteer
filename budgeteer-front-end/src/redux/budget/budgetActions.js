import fetchAddItem from "../../providers/budget/fetchAddItem";

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetchAddItem(item).then((data) => {
      data.status !== 500
        ? dispatch({ type: "ADD_ITEM", item: data.budget })
        : dispatch({ type: "BUDGER_ERROR" });
    });
  };
};
