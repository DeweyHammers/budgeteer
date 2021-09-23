import React, { Component } from "react";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
} from "@mui/material";

const DEFAULT_STATE = {
  name: "",
  payee: "",
  outflow: "",
  inflow: "",
};

export default class AddTransaction extends Component {
  state = DEFAULT_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const item = this.props.budget.filter(
      (item) => item.id === this.state.payee
    );
    this.handlePayee(item);
    this.props.addTransaction(
      {
        name: this.state.name,
        payee: item[0].name,
        outflow:
          this.state.outflow !== "" ? parseInt(this.state.outflow, 10) : 0,
        inflow: this.state.inflow !== "" ? parseInt(this.state.inflow, 10) : 0,
      },
      item[0]
    );
    this.setState(DEFAULT_STATE);
  };

  handlePayee = (item) => {
    if (item.length !== 0) {
      if (this.state.outflow.length === 0) {
        item[0].amount += parseInt(this.state.inflow, 10);
      } else {
        item[0].amount -= parseInt(this.state.outflow, 10);
      }
    } else {
      item[0] = this.state.payee;
    }
  };

  renderItems = () => {
    return this.props.budget.map((item) => (
      <MenuItem key={item.id} value={item.id}>
        {item.name} | ${item.amount}
      </MenuItem>
    ));
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
          name="name"
          size="small"
          label="Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="select-label">Payee</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={this.state.payee}
            label="Payee"
            name="payee"
            onChange={this.handleChange}
            required
          >
            <MenuItem value={this.props.account}>{this.props.account}</MenuItem>
            {this.renderItems()}
          </Select>
        </FormControl>
        <TextField
          name="outflow"
          size="small"
          label="Outflow"
          type="number"
          value={this.state.outflow}
          onChange={this.handleChange}
        />
        <TextField
          name="inflow"
          size="small"
          label="Inflow"
          type="number"
          value={this.state.inflow}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    );
  }
}
