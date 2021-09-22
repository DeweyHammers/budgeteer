import React, { Component } from "react";
import ShowTransition from "./ShowTransaction";
import EditTransaction from "./EditTransaction";
import { TableCell, TableRow, Button, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { connect } from "react-redux";
import {
  editTransaction,
  removeTransaction,
} from "../../redux/transaction/transactionActions";

class Transaction extends Component {
  state = {
    showEditTransaction: false,
  };

  handleShowEditTransaction = () => {
    this.setState({ showEditTransaction: !this.state.showEditTransaction });
  };

  handleEditTransaction = (transaction) => {
    this.props.editTransaction({
      id: this.props.transaction.id,
      name: transaction.name,
      account: this.props.transaction.account,
    });
    this.handleShowEditTransaction();
  };

  handleRemoveTransaction = () => {
    this.props.removeTransaction(this.props.transaction);
    this.handleShowEditTransaction();
  };

  renderData = () => {
    const date = new Date(this.props.transaction.created_at);
    return date.toDateString();
  };

  render() {
    return (
      <TableRow>
        <TableCell>
          <Button onClick={this.handleShowEditTransaction} size="small">
            <Edit />
          </Button>
        </TableCell>
        <TableCell>
          <Typography>{this.renderData()}</Typography>
        </TableCell>
        {!this.state.showEditTransaction ? (
          <ShowTransition
            transaction={this.props.transaction}
            item={this.props.item}
          />
        ) : (
          <EditTransaction
            handleEditTransaction={this.handleEditTransaction}
            removeTransaction={this.handleRemoveTransaction}
            transaction={this.props.transaction}
            item={this.props.item}
          />
        )}
      </TableRow>
    );
  }
}

export default connect(null, { editTransaction, removeTransaction })(
  Transaction
);
