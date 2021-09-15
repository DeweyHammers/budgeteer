import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import { connect } from "react-redux";
import { checkForLogin } from "./redux/user/userActions";

class App extends Component {
  componentDidMount() {
    this.props.checkForLogin(this.props.loggedIn);
  }

  render() {
    return (
      <Switch>
        <Route exact path={"/"} render={(props) => <Home {...props} />} />
        <Route
          path={"/dashboard"}
          render={(props) => <Dashboard {...props} />}
        />
        <Route path={"/profile"} render={(props) => <Profile {...props} />} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return { loggedIn: state.userReducers.loggedIn };
};

export default connect(mapStateToProps, { checkForLogin })(App);
