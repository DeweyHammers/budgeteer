import React, { Component, Fragment } from "react";
import { TextField, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default class EditAccount extends Component {
  state = {
    name: this.props.account,
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = () => {
    this.props.editAccount(this.state.name);
    this.props.closeEdit();
  };

  handleRemove = () => {
    this.props.removeAccount();
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
