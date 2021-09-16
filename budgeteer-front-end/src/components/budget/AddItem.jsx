import React, { Component } from "react";

const DEFAULT_STATE = {
  name: "",
  cost_per_month: "",
  assign_money: "",
};

export default class AddItem extends Component {
  state = DEFAULT_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.props.closeAdd();
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Cost Per Month"
          name="cost_per_month"
          value={this.state.cost_per_month}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Assign Money"
          name="assign_money"
          value={this.state.assign_money}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" onChange={this.handleChange} />
      </form>
    );
  }
}
