import React, { Component } from "react";
import EditUser from "./EditUser";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import CloseAccount from "./CloseAccount";

export default class User extends Component {
  state = {
    showEditUsername: false,
    showEditEmail: false,
    showCloseAccount: false,
  };

  handleShowEdit = (event) => {
    this.setState({ [event]: !this.state[event] });
  };

  handleCloseAccount = () => {
    this.setState({ showCloseAccount: !this.state.showCloseAccount });
  };

  render() {
    return (
      <Box
        sx={{
          textAlign: "center",
          marginTop: 6,
        }}
      >
        <CloseAccount
          show={this.state.showCloseAccount}
          handleClose={this.handleCloseAccount}
          user={this.props.user}
        />
        <Typography variant="h1" component="div" gutterBottom>
          Your Info
        </Typography>
        <Typography variant="h2" component="div">
          {!this.state.showEditUsername ? (
            `Username: ${this.props.user.username}`
          ) : (
            <EditUser
              name={"Username"}
              value={this.props.user.username}
              closeEdit={this.handleShowEdit}
              user={this.props.user}
            />
          )}
          <IconButton
            size="large"
            color="primary"
            onClick={() => this.handleShowEdit("showEditUsername")}
          >
            <Edit />
          </IconButton>
        </Typography>
        <Typography variant="h2" component="div" gutterBottom>
          {!this.state.showEditEmail ? (
            `Email: ${this.props.user.email}`
          ) : (
            <EditUser
              name={"Email"}
              value={this.props.user.email}
              closeEdit={this.handleShowEdit}
              user={this.props.user}
            />
          )}
          <IconButton
            size="large"
            color="primary"
            onClick={() => this.handleShowEdit("showEditEmail")}
          >
            <Edit />
          </IconButton>
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Number of Budget Items: {this.props.budget.length}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Number of Budget Categories: {this.props.categories.length}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Number of Transactions: {this.props.transactions.length}
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Number of Accounts: {this.props.accounts.length}
        </Typography>
        <Button
          style={{ marginTop: 30 }}
          variant="contained"
          color="error"
          onClick={this.handleCloseAccount}
        >
          Close Account
        </Button>
      </Box>
    );
  }
}
