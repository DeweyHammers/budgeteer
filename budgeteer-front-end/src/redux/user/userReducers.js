const user = { user: {}, loggedIn: false, loading: false, errors: false };

const userReducers = (state = user, action) => {
  switch (action.type) {
    case "LOADING_USER":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loading: false,
        errors: false,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case "ERROR":
      return {
        ...state,
        loggedIn: false,
        loading: false,
        errors: action.errors,
      };
    case "CLOSE_ERROR":
      return {
        ...state,
        errors: false,
      };
    default:
      return state;
  }
};

export default userReducers;
