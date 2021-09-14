import fetchRegistration from "../../providers/user/fetchRegistration";
import fetchLogin from "../../providers/user/fetchLogin";
import fetchLogout from "../../providers/user/fetchLogout";
import fetchLoggedin from "../../providers/user/fetchLoggedIn";

export const checkForLogin = (loggedinStatus) => {
  return (dispatch) => {
    fetchLoggedin().then((data) => {
      if (data.logged_in && loggedinStatus === false) {
        dispatch({ type: "LOGIN_USER", user: data.user });
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
        : dispatch({ type: "ERROR", errors: data.status });
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
    fetchLogin(user).then((data) => {
      data.status !== 401
        ? dispatch({ type: "LOGIN_USER", user: data.user })
        : dispatch({ type: "ERROR", errors: data.status });
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    fetchLogout().then((data) => {
      data.status === 200
        ? dispatch({ type: "LOGOUT_USER" })
        : dispatch({ type: "ERROR", errors: data.status });
    });
  };
};