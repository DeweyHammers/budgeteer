import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../NavBar";
import Budget from "../budget/Budget";

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
        <Budget />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state.userReducers;
  return { user, loggedIn };
};

export default connect(mapStateToProps)(Dashboard);
