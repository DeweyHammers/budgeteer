import React, { Component } from "react";
import ShowItem from "./ShowItem";
import EditItem from "./EditItem";
import { TableRow, TableCell, Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

class Item extends Component {
  state = {
    showEdit: false,
  };

  handleShowEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit,
    });
  };

  render() {
    return (
      <TableRow>
        <TableCell>
          <Button size="small" onClick={this.handleShowEdit}>
            <Edit />
          </Button>
        </TableCell>
        {!this.state.showEdit ? (
          <ShowItem item={this.props.item} />
        ) : (
          <EditItem
            closeEdit={this.handleShowEdit}
            category={this.props.category}
            item={this.props.item}
          />
        )}
      </TableRow>
    );
  }
}

export default Item;
