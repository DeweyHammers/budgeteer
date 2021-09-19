import React, { Component } from "react";
import { connect } from "react-redux";
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

class AddTransaction extends Component {
  state = DEFAULT_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(DEFAULT_STATE);
  };

  renderItems = () => {
    return this.props.budget.map((item) => (
      <MenuItem value={item.name}>{item.name}</MenuItem>
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
          >
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

const mapStateToProps = (state) => {
  return { budget: state.budgetReducers.budget };
};

export default connect(mapStateToProps)(AddTransaction);
