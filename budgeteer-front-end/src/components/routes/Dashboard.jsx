import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import Accounts from "../transaction/Accounts";
import Budget from "../budget/Budget";
import Account from "../transaction/Account";
import styles from "./styles/Dashboard.module.css";
import { Grid, Typography } from "@mui/material";

class Dashboard extends Component {
  componentDidMount() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  componentDidUpdate() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  handleClickToProfile = () => {
    this.props.history.push("/profile");
  };

  handleAssignTransaction = () => {
    const transactions = this.props.transactions.filter(
      (transaction) => transaction.account === this.props.showAccount
    );
    return transactions;
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <NavBar showProfile={this.handleClickToProfile} />
          <Grid container className={styles.container}>
            <Grid item xs={false} sm={4} md={4}>
              <Accounts />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              {!this.props.showAccount ? (
                <Budget />
              ) : (
                <Account
                  account={this.props.showAccount}
                  transactions={this.handleAssignTransaction()}
                  showBudget={this.handleShowTransactions}
                />
              )}
            </Grid>
          </Grid>
        </div>
        <Typography
          className={styles.footer}
          variant="overline"
          display="block"
        >
          Copyright © Budgeteer 2021
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state.userReducers;
  const { transactions, showAccount } = state.transactionReducers;
  return {
    user,
    loggedIn,
    transactions,
    showAccount,
  };
};

export default connect(mapStateToProps)(Dashboard);
