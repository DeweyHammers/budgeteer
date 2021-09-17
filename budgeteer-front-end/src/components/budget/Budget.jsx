import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/budget/budgetActions";
import AddCategory from "./AddCategory";
import CategoriesContainer from "../../containers/budget/CategoriesContainer";
import { Box, Paper, Button } from "@mui/material";

class Budget extends Component {
  state = {
    showAddCategory: false,
  };

  handleShowAddCategory = () => {
    this.setState({ showAddCategory: !this.state.showAddCategory });
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
          <Button variant="contained" onClick={this.handleShowAddCategory}>
            Add Category
          </Button>
          {this.state.showAddCategory && (
            <AddCategory
              closeAdd={this.handleShowAddCategory}
              handleAddCategory={this.props.addCategory}
            />
          )}
          <CategoriesContainer
            categories={this.props.categories}
            items={this.props.budget}
          />
        </Paper>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const { budget, categories } = state.budgetReducers;
  return { budget, categories };
};

export default connect(mapStateToProps, { addCategory })(Budget);
