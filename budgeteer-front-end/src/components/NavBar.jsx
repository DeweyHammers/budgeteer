import React from "react";
import { logoutUser } from "../redux/user/userActions";
import { connect } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const NavBar = ({ logoutUser }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#126E82" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Budgeteer
          </Typography>
          <Button onClick={logoutUser} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default connect(null, { logoutUser })(NavBar);
