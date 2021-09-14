import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/user/userActions";

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
        <h1>DASHBOARD PAGE</h1>
        <button onClick={this.props.logoutUser}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state;
  return { user, loggedIn };
};

export default connect(mapStateToProps, { logoutUser })(Dashboard);
