import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../../redux/budget/budgetActions";
import AddCategory from "./AddCategory";
import CategoriesContainer from "../../containers/budget/CategoriesContainer";

class Budget extends Component {
  state = {
    showAddCategory: false,
  };

  handleShowAddCategory = () => {
    this.setState({ showAddCategory: !this.state.showAddCategory });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowAddCategory}>Add Category</button>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { budget, categories } = state.budgetReducers;
  return { budget, categories };
};

export default connect(mapStateToProps, { addCategory })(Budget);
