import React, { Component } from "react";

class EditCategory extends Component {
  state = {
    name: this.props.category,
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.closeEdit();
  };

  render() {
    return (
      <h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" value="Edit" />
          <button>X</button>
        </form>
      </h1>
    );
  }
}

export default EditCategory;
