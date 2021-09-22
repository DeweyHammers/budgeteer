import React, { Component, Fragment } from "react";
import { TableCell, TextField, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default class Transaction extends Component {
  state = {
    name: this.props.transaction.name,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    this.props.handleEditTransaction(this.state);
  };

  handleRemove = () => {
    this.props.removeTransaction();
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
          <Typography style={{ width: 100 }}>{this.props.item.name}</Typography>
        </TableCell>
        <TableCell>
          <Typography style={{ width: 100 }} align="right">
            ${this.props.transaction.outflow}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography style={{ width: 100 }} align="right">
            ${this.props.transaction.inflow}
          </Typography>
        </TableCell>
        <TableCell>
          <Button variant="contained" type="submit" onClick={this.handleClick}>
            Edit
          </Button>
        </TableCell>
        <TableCell>
          <Button color="error" variant="outlined" onClick={this.handleRemove}>
            <Delete />
          </Button>
        </TableCell>
      </Fragment>
    );
  }
}
