import React from "react";
import { logoutUser } from "../redux/user/userActions";
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

const NavBar = ({
  logoutUser,
  showProfile,
  showDashboard,
  loadingBudget,
  loadingTransaction,
}) => {
  const renderLoadingBar = () => {
    if (loadingBudget || loadingTransaction) {
      return <LinearProgress />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#126E82" }}>
        <Toolbar>
          <Typography
            onClick={showDashboard}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Budgeteer
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
    </Box>
  );
};

export default connect(null, { logoutUser })(NavBar);
