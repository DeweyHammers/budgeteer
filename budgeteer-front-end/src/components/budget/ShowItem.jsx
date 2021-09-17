import React, { Fragment } from "react";
import { TableCell, Typography } from "@mui/material";

const ShowItem = ({ item }) => {
  return (
    <Fragment>
      <TableCell>
        <Typography>{item.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">${item.amount}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">${item.cost_per_month}</Typography>
      </TableCell>
      <TableCell>
        <Typography align="right">${item.assign_money}</Typography>
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </Fragment>
  );
};

export default ShowItem;
