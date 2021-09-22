import fetchRegistration from "../../providers/user/fetchRegistration";
import fetchLogin from "../../providers/user/fetchLogin";
import fetchLogout from "../../providers/user/fetchLogout";
import fetchLoggedin from "../../providers/user/fetchLoggedIn";
import fetchUpdateUser from "../../providers/user/fetchUpdateUser";

export const checkForLogin = (loggedinStatus) => {
  return (dispatch) => {
    fetchLoggedin().then((data) => {
      if (data.logged_in && loggedinStatus === false) {
        dispatch({ type: "LOGIN_USER", user: data.user });
        dispatch({ type: "GET_BUDGET", budget: data.budgets });
        dispatch({ type: "LOAD_BUDGET_CATEGORIES" });
        dispatch({
          type: "GET_TRANSACTION",
          transactions: data.transactions.map((data) => {
            const transaction = data.transaction;
            transaction.manifests = data.manifests;
            return transaction;
          }),
        });
        dispatch({ type: "LOAD_TRANSACTION_ACCOUNTS" });
      }
    });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    fetchRegistration(user).then((data) => {
      data.status !== 500
        ? dispatch({ type: "LOGIN_USER", user: data.user })
        : dispatch({ type: "USER_ERROR", errors: true });
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    fetchLogin(user).then((data) => {
      if (data.status !== 401) {
        dispatch({ type: "LOGIN_USER", user: data.user });
        dispatch({ type: "GET_BUDGET", budget: data.budgets });
        dispatch({ type: "LOAD_BUDGET_CATEGORIES" });
        dispatch({
          type: "GET_TRANSACTION",
          transactions: data.transactions.map((data) => {
            const transaction = data.transaction;
            transaction.manifests = data.manifests;
            return transaction;
          }),
        });
        dispatch({ type: "LOAD_TRANSACTION_ACCOUNTS" });
      } else {
        dispatch({ type: "USER_ERROR", errors: true });
      }
    });
  };
};

export const editUser = (user) => {
  return (dispatch) => {
    fetchUpdateUser(user).then((data) => {
      data.status !== 500
        ? dispatch({ type: "UPDATE_USER", user: data.user })
        : dispatch({ type: "USER_ERROR", errors: true });
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    fetchLogout().then((data) => {
      if (data.status === 200) {
        dispatch({ type: "LOGOUT_USER" });
        dispatch({ type: "CLEAR_BUDGET" });
        dispatch({ type: "CLEAR_TRANSACTION" });
      } else {
        dispatch({ type: "USER_ERROR", errors: true });
      }
    });
  };
};

export const closeError = () => {
  return {
    type: "CLOSE_ERROR",
  };
};
