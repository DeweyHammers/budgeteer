import React, { Component } from "react";
import { connect } from "react-redux";
import { closeUserError } from "../../redux/user/userActions";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import {
  Link,
  Grid,
  CssBaseline,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import classes from "./styles/Home.module.css";
import DisplayAlert from "../DisplayAlert";

class Home extends Component {
  state = {
    switchLogin: true,
  };

  componentDidUpdate() {
    this.props.loggedIn && this.props.history.push("/dashboard");
  }

  handleShowLogin = () => {
    this.setState({ switchLogin: !this.state.switchLogin });
  };

  handleCloseError = () => {
    this.props.closeUserError();
  };

  render() {
    return (
      <Grid container className={classes.container}>
        <CssBaseline />
        {this.props.user_errors && (
          <DisplayAlert
            show={this.props.user_errors}
            handleClose={this.handleCloseError}
            message={this.props.user_errors}
            vertical="top"
            horizontal="right"
            marginRight="195px"
          />
        )}
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <div className={classes.form}>
            <Typography variant="h1">Budgeteer</Typography>
            {this.state.switchLogin ? <Login /> : <Registration />}
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={11}>
                {this.props.user_loading && <LinearProgress />}
                <Grid container className={classes.link}>
                  <Grid item xs={6}>
                    <Grid container>
                      <Link>Forgot Password</Link>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container justifyContent="flex-end">
                      <Link onClick={this.handleShowLogin} variant="body2">
                        {this.state.switchLogin
                          ? "Don't have an account? Sign Up"
                          : "Have an account? Login"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={11}>
                <Typography variant="overline" display="block">
                  Copyright © Budgeteer 2021
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, user_loading, user_errors } = state.userReducers;
  return { loggedIn, user_loading, user_errors };
};

export default connect(mapStateToProps, { closeUserError })(Home);
