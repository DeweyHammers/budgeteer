import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { AccountCircle, Lock } from "@material-ui/icons/";
import FormItem from "./FormItem";
import { loginUser } from "../../redux/user/userActions";
import { connect } from "react-redux";

const DEFAULT_STATE = {
  username: "",
  password: "",
};

class Login extends Component {
  state = DEFAULT_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
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
          name="password"
          type="password"
          placeholder="Password"
          Icon={Lock}
          handleChange={this.handleChange}
          value={this.state.password}
        />
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(null, { loginUser })(Login);
