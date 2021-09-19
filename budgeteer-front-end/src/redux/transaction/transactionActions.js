export const addAccount = (name) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TRANSACTION" });
    dispatch({ type: "ADD_ACCOUNT", name });
  };
};
