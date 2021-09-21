import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../redux/transaction/transactionActions";
import AddTransaction from "./AddTransaction";
import TransactionContainer from "../../containers/TranscationContainer";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Edit, Add } from "@mui/icons-material";

class Account extends Component {
  state = {
    showAddTransaction: false,
  };

  handleShowTransactions = () => {
    this.setState({ showAddTransaction: !this.state.showAddTransaction });
  };

  handleAddTransaction = (transaction, item) => {
    this.props.addTransaction(
      {
        transaction: {
          name: transaction.name,
          account: this.props.account,
          outflow: transaction.outflow,
          inflow: transaction.inflow,
          user_id: this.props.user.id,
        },
      },
      item
    );
  };

  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 2000,
            height: "auto",
            bgcolor: "#eeeeee",
            paddingTop: 2,
            margin: "atuo",
          },
        }}
      >
        <Paper elevation={0}>
          <Paper>
            <Box
              sx={{
                padding: 1,
                marginTop: 3,
                flexGrow: 1,
                bgcolor: "#CCF2F4",
                "& .MuiTextField-root": {
                  marginTop: 1.5,
                  marginBottom: 1,
                  marginRight: 2,
                  marginLeft: 2,
                },
                "& .MuiButton-root": {
                  marginRight: 1,
                },
              }}
            >
              <Typography variant="h3">
                <Button size="large">
                  <Edit />
                </Button>
                {this.props.account}
              </Typography>
            </Box>
            <Box sx={{ bgcolor: "#85bb65" }}>
              <Typography variant="h4">$0</Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "#DFF6F0",
              }}
            >
              <Button
                size="small"
                variant="contained"
                style={{ marginTop: 5, marginBottom: 5 }}
                onClick={this.handleShowTransactions}
              >
                <Add />
              </Button>
              {this.state.showAddTransaction && (
                <AddTransaction
                  budget={this.props.budget}
                  accounts={this.props.accounts}
                  addTransaction={this.handleAddTransaction}
                />
              )}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        <Typography>Name</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="right">Payee</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="right">Outflow</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="right">Inflow</Typography>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TransactionContainer
                      transactions={this.props.transactions}
                      budget={this.props.budget}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Paper>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.userReducers;
  const { budget } = state.budgetReducers;
  const { accounts } = state.transactionReducers;
  return { user, budget, accounts };
};

export default connect(mapStateToProps, { addTransaction })(Account);
