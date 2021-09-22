import React, { Component } from "react";
import NavBar from "../NavBar";
import { connect } from "react-redux";

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
        PROFILE PAGE
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, loggedIn } = state.userReducers;
  return { user, loggedIn };
};

export default connect(mapStateToProps)(Profile);
