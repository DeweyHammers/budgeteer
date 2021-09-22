import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/budget/budgetActions";
import AddCategory from "../AddCategory";
import BudgetContainer from "../../containers/BudgetContainer";
import AssignMoney from "./AssignMoney";
import { Box, Paper, Button, Typography } from "@mui/material";

class Budget extends Component {
  state = {
    showAddCategory: false,
    showAssignMoney: false,
  };

  renderAssignMoney = () => {
    if (this.props.user.assign_money > 0) {
      return (
        <Button
          style={{ marginBottom: 10 }}
          variant="contained"
          onClick={this.handleShowAssignMoney}
        >
          ${this.props.user.assign_money} Assign Money
        </Button>
      );
    } else {
      return (
        <Button variant="contained" disabled>
          All money Assigned
        </Button>
      );
    }
  };

  handleShowAddCategory = () => {
    this.setState({ showAddCategory: !this.state.showAddCategory });
  };

  handleShowAssignMoney = () => {
    this.setState({ showAssignMoney: !this.state.showAssignMoney });
  };

  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 2000,
            height: "auto",
            bgcolor: "#eeeeee",
            paddingTop: 2,
            margin: "atuo",
          },
        }}
      >
        <Paper elevation={0}>
          <Typography variant="h2" gutterBottom component="div">
            Your Budget
          </Typography>
          <div>{this.renderAssignMoney()}</div>
          {this.state.showAssignMoney && (
            <AssignMoney
              user={this.props.user}
              budget={this.props.budget}
              handleShowAssignMoney={this.handleShowAssignMoney}
            />
          )}
          <div>
            <Button
              style={{ marginTop: 10 }}
              variant="contained"
              onClick={this.handleShowAddCategory}
            >
              Add Budget
            </Button>
          </div>
          {this.state.showAddCategory && (
            <AddCategory
              closeAdd={this.handleShowAddCategory}
              handleAddCategory={this.props.addCategory}
            />
          )}
          <BudgetContainer
            categories={this.props.categories}
            items={this.props.budget}
          />
        </Paper>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.userReducers;
  const { budget, categories } = state.budgetReducers;
  const { transactions } = state.transactionReducers;
  return { user, budget, categories, transactions };
};

export default connect(mapStateToProps, { addCategory })(Budget);
