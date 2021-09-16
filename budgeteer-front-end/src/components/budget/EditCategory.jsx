import React, { Component } from "react";

class EditCategory extends Component {
  state = {
    name: this.props.category,
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = () => {
    this.props.editCategory(this.state.name);
    this.props.closeEdit();
  };

  handleRemove = () => {
    this.props.removeCategory();
    this.props.closeEdit();
  };

  render() {
    return (
      <h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Edit" onClick={this.handleSubmit} />
        <button onClick={this.handleRemove}>X</button>
      </h1>
    );
  }
}

export default EditCategory;
