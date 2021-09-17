import React, { Component, Fragment } from "react";
import { TextField, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

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
      <Fragment>
        <TextField
          type="text"
          name="name"
          variant="outlined"
          size="small"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Button variant="contained" type="submit" onClick={this.handleSubmit}>
          Edit
        </Button>
        <Button color="error" variant="outlined" onClick={this.handleRemove}>
          <Delete />
        </Button>
      </Fragment>
    );
  }
}

export default EditCategory;
