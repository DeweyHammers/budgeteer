import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { AccountCircle, Email, Lock } from "@material-ui/icons/";
import FormItem from "./FormItem";
import { registerUser } from "../../redux/user/userActions";
import { connect } from "react-redux";

const DEFAULT_STATE = {
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};

class Registration extends Component {
  state = DEFAULT_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state);
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormItem
          name="username"
          type="text"
          placeholder="Username"
          Icon={AccountCircle}
          handleChange={this.handleChange}
          value={this.state.username}
        />
        <FormItem
          name="email"
          type="text"
          placeholder="Email"
          Icon={Email}
          handleChange={this.handleChange}
          value={this.state.email}
        />
        <FormItem
          name="password"
          type="password"
          placeholder="Password"
          Icon={Lock}
          handleChange={this.handleChange}
          value={this.state.password}
        />
        <FormItem
          name="password_confirmation"
          type="password"
          placeholder="Password Confirmation"
          Icon={Lock}
          handleChange={this.handleChange}
          value={this.state.password_confirmation}
        />
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(null, { registerUser })(Registration);
