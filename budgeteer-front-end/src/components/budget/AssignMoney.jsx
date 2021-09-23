import React, { Component } from "react";
import {
  TextField,
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { connect } from "react-redux";
import { editItem } from "../../redux/budget/budgetActions";
import { editUser } from "../../redux/user/userActions";

class AssignMoney extends Component {
  state = {
    payee: "",
    amount: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.payee === "Assign All") {
      this.props.budget.map((item) => {
        item.amount += item.assign_money;
        return this.props.editItem(item);
      });
      this.props.user.assign_money -= this.itemAssignAmount();
      this.props.editUser(this.props.user);
      this.props.handleShowAssignMoney();
    } else {
      let amount = this.state.amount;
      if (amount === "") {
        amount = 0;
      }
      if (this.props.user.assign_money >= this.state.amount) {
        console.log(this.state.amount && true);
        const item = this.props.budget.filter(
          (item) => item.id === this.state.payee
        )[0];
        item.amount += parseInt(amount, 10);
        this.props.user.assign_money -= parseInt(amount, 10);
        this.props.editItem(item);
        this.props.editUser(this.props.user);
        this.props.user.assign_money === 0 &&
          this.props.handleShowAssignMoney();
      }
    }
    this.setState({ payee: "", amount: "" });
  };

  itemAssignAmount = () => {
    const itemAssign = this.props.budget.map((item) => item.assign_money);
    return itemAssign.length !== 0
      ? itemAssign.reduce((acc, cur) => acc + cur)
      : 0;
  };

  renderAssignAll = () => {
    if (this.props.user.assign_money >= this.itemAssignAmount()) {
      return (
        <MenuItem key={this.props.user.id} value="Assign All">
          Assign All
        </MenuItem>
      );
    }
  };

  renderItems = () => {
    return this.props.budget.map((item) => (
      <MenuItem key={item.id} value={item.id}>
        {item.name}
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
            {this.renderAssignAll()}
            {this.renderItems()}
          </Select>
        </FormControl>
        <TextField
          size="small"
          type="number"
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <Button variant="contained" type="submit">
          Assign
        </Button>
      </Box>
    );
  }
}

export default connect(null, { editItem, editUser })(AssignMoney);
