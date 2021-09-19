import React, { Component } from "react";
import AddCategory from "../AddCategory";
import ListAccountNames from "./ListAccountNames";
import { Box, Paper, Button } from "@mui/material";
import { addAccount } from "../../redux/transaction/transactionActions";
import { connect } from "react-redux";

class Accounts extends Component {
  state = {
    showAddCategory: false,
  };

  handleShowAddCategory = () => {
    this.setState({ showAddCategory: !this.state.showAddCategory });
  };

  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: "auto",
            bgcolor: "#eeeeee",
            paddingTop: 2,
            margin: "atuo",
          },
        }}
      >
        <Paper elevation={0}>
          <Button variant="contained" onClick={this.handleShowAddCategory}>
            Add Account
          </Button>
          {this.state.showAddCategory && (
            <AddCategory
              closeAdd={this.handleShowAddCategory}
              handleAddCategory={this.props.addAccount}
            />
          )}
          <ListAccountNames showTransactions={this.props.showTransactions} />
        </Paper>
      </Box>
    );
  }
}

export default connect(null, { addAccount })(Accounts);
