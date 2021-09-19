import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { removeItem, editItem } from "../../redux/budget/budgetActions";
import { TableCell, TextField, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

class EditItem extends Component {
  state = {
    id: this.props.item.id,
    name: this.props.item.name,
    amount: this.props.item.amount,
    cost_per_month: this.props.item.cost_per_month,
    assign_money: this.props.item.assign_money,
    category: this.props.item.category,
    user_id: this.props.item.user,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    this.props.editItem(this.state);
    this.props.closeEdit();
  };

  render() {
    return (
      <Fragment>
        <TableCell>
          <TextField
            type="text"
            name="name"
            size="small"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="number"
            name="amount"
            size="small"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="number"
            name="cost_per_month"
            size="small"
            value={this.state.cost_per_month}
            onChange={this.handleChange}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="number"
            name="assign_money"
            size="small"
            value={this.state.assign_money}
            onChange={this.handleChange}
          />
        </TableCell>
        <TableCell>
          <Button variant="contained" type="submit" onClick={this.handleClick}>
            Edit
          </Button>
        </TableCell>
        <TableCell>
          <Button
            color="error"
            variant="outlined"
            onClick={() =>
              this.props.removeItem(this.props.item, this.props.category)
            }
          >
            <Delete />
          </Button>
        </TableCell>
      </Fragment>
    );
  }
}

export default connect(null, { removeItem, editItem })(EditItem);
