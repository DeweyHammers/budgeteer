import React from "react";
import { logoutUser, closeUserError } from "../redux/user/userActions";
import { closeBudgetError } from "../redux/budget/budgetActions";
import { closeTransactionError } from "../redux/transaction/transactionActions";
import { connect } from "react-redux";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  LinearProgress,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DisplayAlert from "./DisplayAlert";

const NavBar = ({
  logoutUser,
  showProfile,
  showDashboard,
  user_loading,
  budget_loading,
  transactions_loading,
  user_errors,
  budget_errors,
  transactions_errors,
  closeBudgetError,
  closeUserError,
  closeTransactionError,
}) => {
  const renderLoadingBar = () => {
    if (user_loading || budget_loading || transactions_loading) {
      return <LinearProgress />;
    }
  };

  const handleCloseError = () => {
    closeBudgetError();
    closeUserError();
    closeTransactionError();
  };

  const renderError = () => {
    let message = "";
    if (user_errors || budget_errors || transactions_errors) {
      if (user_errors) {
        message = user_errors;
      } else if (budget_errors) {
        message = budget_errors;
      } else {
        message = transactions_errors;
      }
      return (
        <DisplayAlert
          show={true}
          message={message}
          handleClose={handleCloseError}
          vertical="top"
          horizontal="center"
          marginRight="-200px"
        />
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#126E82" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton size="large" color="inherit" onClick={showDashboard}>
              Budgeteer
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              onClick={showProfile}
            >
              <AccountCircle />
            </IconButton>
          </Typography>
          <Button onClick={logoutUser} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {renderLoadingBar()}
      {renderError()}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { user_loading, user_errors } = state.userReducers;
  const { budget_loading, budget_errors } = state.budgetReducers;
  const { transactions_loading, transactions_errors } =
    state.transactionReducers;
  return {
    user_loading,
    budget_loading,
    transactions_loading,
    user_errors,
    budget_errors,
    transactions_errors,
  };
};

export default connect(mapStateToProps, {
  logoutUser,
  closeBudgetError,
  closeUserError,
  closeTransactionError,
})(NavBar);
