import React, { Component } from "react";
import { connect } from "react-redux";
import {
  registerUser,
  loginUser,
  checkForLogin,
} from "../redux/user/userActions";
import Registration from "../components/auth/Registration";
import Login from "../components/auth/Login";

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
      <div>
        <p>{this.props.loading && "Loading"}</p>
        <p>
          {this.props.errors &&
            `There was an Error while fetching your data. Error code: ${this.props.errors}`}
        </p>
        {this.state.switchLogin ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <Registration handleRegistration={this.handleRegistration} />
        )}
        <button onClick={this.handleShowLogin}>
          {this.state.switchLogin ? "Sign Up" : "Go back to login"}
        </button>
      </div>
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
