import React, { Component, Fragment } from "react";
import AddItem from "./AddItem";
import Item from "./Item";
import EditCategory from "./EditCategory";
import { connect } from "react-redux";
import {
  addItem,
  editCategory,
  removeCategory,
} from "../../redux/budget/budgetActions";
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

class Category extends Component {
  state = {
    showAddItem: false,
    editCategory: false,
  };

  handleShowAddItem = () => {
    this.setState({ showAddItem: !this.state.showAddItem });
  };

  renderItems = () => {
    return this.props.items.map((item) => (
      <Item key={item.id} category={this.props.items} item={item} />
    ));
  };

  handleAddItem = (item) => {
    this.props.addItem({
      budget: {
        ...item,
        amount: 0,
        category: this.props.category,
        user_id: this.props.user.id,
      },
    });
  };

  handleShowEditCategory = () => {
    this.setState({ editCategory: !this.state.editCategory });
  };

  handleEditCategory = (name) => {
    this.props.editCategory(this.props.category, name, this.props.items);
  };

  handleRemoveCategory = () => {
    this.props.removeCategory(this.props.category, this.props.items);
  };

  renderCategoryAmount = () => {
    const amount = this.props.items.map((item) => item.amount);
    return amount.length !== 0 ? amount.reduce((acc, cur) => acc + cur) : 0;
  };

  render() {
    return (
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
            <Button size="large" onClick={this.handleShowEditCategory}>
              <Edit />
            </Button>
            {!this.state.editCategory ? (
              this.props.category
            ) : (
              <EditCategory
                closeEdit={this.handleShowEditCategory}
                category={this.props.category}
                editCategory={this.handleEditCategory}
                removeCategory={this.handleRemoveCategory}
              />
            )}
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "#85bb65" }}>
          <Typography variant="h4">${this.renderCategoryAmount()}</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#DFF6F0",
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={this.handleShowAddItem}
            style={{ marginTop: 5, marginBottom: 5 }}
          >
            <Add />
          </Button>
          {this.state.showAddItem && (
            <AddItem
              closeAdd={this.handleShowAddItem}
              category={this.props.category}
              addItem={this.handleAddItem}
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
                    <Typography align="right">Amount</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="right">Cost Per Month</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align="right">Assign Money</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderItems()}</TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducers.user };
};

export default connect(mapStateToProps, {
  addItem,
  editCategory,
  removeCategory,
})(Category);
