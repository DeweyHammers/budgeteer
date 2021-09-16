import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, editItem } from "../../redux/budget/budgetActions";

class EditItem extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    amount: this.props.item.amount,
    cost_per_month: this.props.item.cost_per_month,
    assign_money: this.props.item.assign_money,
    category: this.props.item.category,
    user_id: this.props.item.user,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    this.props.editItem(this.state);
    this.props.closeEdit();
  };

  render() {
    return (
      <>
        <td>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="number"
            name="cost_per_month"
            value={this.state.cost_per_month}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input
            type="number"
            name="assign_money"
            value={this.state.assign_money}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <button type="submit" onClick={this.handleClick}>
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() =>
              this.props.removeItem(this.props.item, this.props.category)
            }
          >
            X
          </button>
        </td>
      </>
    );
  }
}

export default connect(null, { removeItem, editItem })(EditItem);
