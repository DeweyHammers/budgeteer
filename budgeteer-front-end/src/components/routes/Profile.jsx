import React, { Component } from "react";
import NavBar from "../NavBar";
import User from "../user/User";
import styles from "./styles/Profile.module.css";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

class Profile extends Component {
  componentDidMount() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  componentDidUpdate() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  handleClickToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <NavBar showDashboard={this.handleClickToDashboard} />
        <User
          user={this.props.user}
          budget={this.props.budget}
          transactions={this.props.transactions}
          categories={this.props.categories}
          accounts={this.props.accounts}
        />
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
  const { budget, categories } = state.budgetReducers;
  const { transactions, accounts } = state.transactionReducers;
  return {
    user,
    loggedIn,
    budget,
    transactions,
    categories,
    accounts,
  };
};

export default connect(mapStateToProps)(Profile);
