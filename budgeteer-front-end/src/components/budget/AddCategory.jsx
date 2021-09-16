import React, { Component } from "react";

export default class AddCategory extends Component {
  state = { name: "" };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddCategory(this.state.name);
    this.props.closeAdd();
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Category Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Create" />
      </form>
    );
  }
}
