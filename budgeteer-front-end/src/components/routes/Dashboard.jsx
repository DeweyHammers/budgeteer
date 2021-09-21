import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import Accounts from "../transaction/Accounts";
import Budget from "../budget/Budget";
import Account from "../transaction/Account";
import styles from "./styles/Dashboard.module.css";
import { Grid } from "@mui/material";

class Dashboard extends Component {
  state = {
    showTransactions: false,
    account: null,
  };

  componentDidMount() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  componentDidUpdate() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  handleShowTransactions = (account) => {
    this.setState({
      showTransactions: !this.state.showTransactions,
      account,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Grid container className={styles.container}>
          <Grid item xs={false} sm={4} md={4}>
            <Accounts showTransactions={this.handleShowTransactions} />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            {!this.state.showTransactions ? (
              <Budget />
            ) : (
              <Account
                account={this.state.account}
                transactions={this.props.transactions.filter(
                  (transaction) => transaction.account === this.state.account
                )}
                showBudget={this.handleShowTransactions}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state.userReducers;
  const { transactions } = state.transactionReducers;
  return { user, loggedIn, transactions };
};

export default connect(mapStateToProps)(Dashboard);
