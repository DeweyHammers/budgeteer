import React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { connect } from "react-redux";

const ListAccountNames = ({ accounts, showTransactions }) => {
  const renderAccountsNames = () => {
    return accounts.map((account) => (
      <Typography variant="h2" component="div">
        <Button
          onClick={() => showTransactions(account)}
          variant="contained"
          size="large"
          fullWidth
        >
          $0 {account}
        </Button>
      </Typography>
    ));
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
  return { accounts: state.transactionsReducer.accounts };
};

export default connect(mapStateToProps)(ListAccountNames);
