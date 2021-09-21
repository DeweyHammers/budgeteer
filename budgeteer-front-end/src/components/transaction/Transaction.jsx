import React from "react";
import { TableCell, Typography, TableRow, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

const Transaction = ({ transaction, item }) => {
  return (
    <TableRow>
      <TableCell>
        <Button size="small">
          <Edit />
        </Button>
      </TableCell>
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
    </TableRow>
  );
};

export default Transaction;
