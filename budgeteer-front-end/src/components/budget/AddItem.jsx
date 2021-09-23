import React, { Component } from "react";
import { TextField, Box, Button } from "@mui/material";

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
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            marginBottom: 1,
            marginRight: 1,
            marginLeft: 1,
          },
        }}
        onSubmit={this.handleSubmit}
      >
        <TextField
          type="text"
          placeholder="Item Name"
          name="name"
          size="small"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <TextField
          type="number"
          placeholder="Cost Per Month"
          name="cost_per_month"
          size="small"
          value={this.state.cost_per_month}
          onChange={this.handleChange}
          required
        />
        <TextField
          type="number"
          placeholder="Assign Money"
          name="assign_money"
          size="small"
          value={this.state.assign_money}
          onChange={this.handleChange}
          required
        />
        <Button type="submit" variant="contained" onChange={this.handleChange}>
          Add
        </Button>
      </Box>
    );
  }
}
