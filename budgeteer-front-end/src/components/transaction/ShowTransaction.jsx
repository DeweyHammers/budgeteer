import React, { Fragment } from "react";
import { TableCell, Typography } from "@mui/material";

const Transaction = ({ transaction, item }) => {
  return (
    <Fragment>
      <TableCell>
        <Typography>{transaction.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">{item.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">${transaction.outflow}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">${transaction.inflow}</Typography>
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </Fragment>
  );
};

export default Transaction;
