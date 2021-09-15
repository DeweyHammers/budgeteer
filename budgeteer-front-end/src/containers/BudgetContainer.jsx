import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/budget/budgetActions";
import AddbudgeItem from "../components/AddBudgeItem";
import BudgetItem from "../components/BudgetItem";

class BudgetContainer extends Component {
  handleAddItem = (item) => {
    this.props.addItem({ budget: { ...item, user_id: this.props.user.id } });
  };

  renderBudgetItems = () => {
    return this.props.budget.map((item) => (
      <BudgetItem key={item.id} item={item} />
    ));
  };

  render() {
    return (
      <div>
        <AddbudgeItem addItem={this.handleAddItem} />
        <div>
          <h3>Your budget Items</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Cost Per Month</th>
                <th>Assign Money</th>
              </tr>
            </thead>
            <tbody>{this.renderBudgetItems()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.userReducers;
  const { budget } = state.budgetReducers;
  return { user, budget };
};

export default connect(mapStateToProps, { addItem })(BudgetContainer);
