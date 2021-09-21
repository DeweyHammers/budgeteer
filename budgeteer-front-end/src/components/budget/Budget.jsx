import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/budget/budgetActions";
import AddCategory from "../AddCategory";
import BudgetContainer from "../../containers/BudgetContainer";
import { Box, Paper, Button, Typography } from "@mui/material";

class Budget extends Component {
  state = {
    showAddCategory: false,
  };

  renderAssignMoney = () => {
    const findTransaction = this.props.transactions.filter(
      (transaction) => transaction.manifests.length === 0
    );
    const inflow = findTransaction.map((transaction) => transaction.inflow);
    const outflow = findTransaction.map((transaction) => transaction.outflow);
    const amount =
      inflow.length !== 0 ? inflow.reduce((acc, cur) => acc + cur) : 0;
    const spent =
      outflow.length !== 0 ? outflow.reduce((acc, cur) => acc + cur) : 0;
    return amount - spent;
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
          <div>
            <Button variant="contained">
              ${this.renderAssignMoney()} Assign Money
            </Button>
          </div>
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
  const { budget, categories } = state.budgetReducers;
  const { transactions } = state.transactionReducers;
  return { budget, categories, transactions };
};

export default connect(mapStateToProps, { addCategory })(Budget);
