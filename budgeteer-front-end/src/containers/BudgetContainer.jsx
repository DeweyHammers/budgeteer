import React, { Component } from "react";
import { connect } from "react-redux";
import AddbudgeItem from "../components/AddBudgeItem";

class BudgetContainer extends Component {
  render() {
    return (
      <div>
        <p>Amount: ${this.props.user.money}</p>
        <AddbudgeItem />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(BudgetContainer);
