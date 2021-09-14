import React, { Component } from "react";
import { connect } from "react-redux";
import {
  registerUser,
  loginUser,
  checkForLogin,
} from "../redux/user/userActions";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";
import { Button, Grid, CssBaseline, Typography } from "@material-ui/core";
import classes from "./css/Home.module.css";

class Home extends Component {
  state = {
    switchLogin: true,
  };

  componentDidMount() {
    this.props.checkForLogin(this.props.loggedIn);
  }

  componentDidUpdate() {
    this.props.loggedIn && this.props.history.push("/dashboard");
  }

  handleShowLogin = () => {
    this.setState({ switchLogin: !this.state.switchLogin });
  };

  handleLogin = (data) => {
    this.props.loginUser(data);
  };

  handleRegistration = (data) => {
    this.props.registerUser(data);
  };

  render() {
    return (
      <Grid container className={classes.container}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <div className={classes.form}>
            <Typography variant="h1">Budgeteer</Typography>
            {this.state.switchLogin ? (
              <Login handleLogin={this.handleLogin} />
            ) : (
              <Registration handleRegistration={this.handleRegistration} />
            )}
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={11}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleShowLogin}
                  className={classes.button}
                >
                  {this.state.switchLogin ? "Create Account" : "Login Page"}
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, loading, errors } = state;
  return { loggedIn, loading, errors };
};

export default connect(mapStateToProps, {
  registerUser,
  loginUser,
  checkForLogin,
})(Home);
