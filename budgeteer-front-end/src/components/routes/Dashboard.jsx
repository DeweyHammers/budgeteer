import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import Budget from "../budget/Budget";
import styles from "./styles/Dashboard.module.css";
import { Grid } from "@mui/material";

class Dashboard extends Component {
  componentDidMount() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  componentDidUpdate() {
    !this.props.loggedIn && this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid container className={styles.container}>
          <Grid item xs={false} sm={4} md={4}></Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Budget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state.userReducers;
  return { user, loggedIn };
};

export default connect(mapStateToProps)(Dashboard);
