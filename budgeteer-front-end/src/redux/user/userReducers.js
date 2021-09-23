const user = {
  user: {},
  loggedIn: false,
  user_loading: false,
  user_errors: false,
};

const userReducers = (state = user, action) => {
  switch (action.type) {
    case "LOADING_USER":
      return {
        ...state,
        user_loading: true,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        user_loading: false,
        user_errors: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.user,
        user_loading: false,
        user_errors: false,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        loggedIn: false,
        user_loading: false,
        user_errors: false,
      };
    case "USER_ERROR":
      return {
        ...state,
        user_loading: false,
        user_errors: action.errors,
      };
    case "CLOSE_USER_ERROR":
      return {
        ...state,
        user_errors: false,
      };
    default:
      return state;
  }
};

export default userReducers;
