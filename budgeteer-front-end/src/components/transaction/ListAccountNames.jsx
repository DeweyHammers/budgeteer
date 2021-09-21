import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { connect } from "react-redux";

const ListAccountNames = ({ accounts, showTransactions, transactions }) => {
  const renderAccountsNames = () => {
    return accounts.map((account, index) => {
      const renderTransactionAmount = () => {
        const findTransaction = transactions.filter(
          (transaction) => transaction.account === account
        );
        const inflow = findTransaction.map((transaction) => transaction.inflow);
        const outflow = findTransaction.map(
          (transaction) => transaction.outflow
        );
        const amount =
          inflow.length !== 0 ? inflow.reduce((acc, cur) => acc + cur) : 0;
        const spent =
          outflow.length !== 0 ? outflow.reduce((acc, cur) => acc + cur) : 0;
        return amount - spent;
      };

      return (
        <Typography key={index} variant="h2" component="div">
          <Button
            onClick={() => showTransactions(account)}
            variant="contained"
            size="large"
            fullWidth
          >
            ${renderTransactionAmount()} {account}
          </Button>
        </Typography>
      );
    });
  };

  return (
    <Box
      sx={{
        padding: 1,
        marginTop: 3,
        flexGrow: 1,
        "& > :not(style)": {
          marginTop: 1.5,
          marginBottom: 1,
          marginRight: 2,
          marginLeft: 2,
          bgcolor: "#eeeeee",
        },
      }}
    >
      <Paper elevation={0}>{renderAccountsNames()}</Paper>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { accounts, transactions } = state.transactionReducers;
  return { accounts, transactions };
};

export default connect(mapStateToProps)(ListAccountNames);
