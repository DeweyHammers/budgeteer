import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import BudgetContainer from "../containers/BudgetContainer";

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
        <BudgetContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(Dashboard);
