import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addCategory } from "../../redux/budget/budgetActions";
import AddCategory from "./AddCategory";
import ItemContainer from "../../containers/budget/ItemContainer";

class Budget extends Component {
  state = {
    showAddCategory: false,
    showAddItem: false,
  };

  handleShowAddItem = () => {
    this.setState({ showAddItem: !this.state.showAddItem });
  };

  handleShowAddCategory = () => {
    this.setState({ showAddCategory: !this.state.showAddCategory });
  };

  handleAddItem = (item, category) => {
    this.props.addItem({
      budget: { ...item, category: category, user_id: this.props.user.id },
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowAddCategory}>Add Category</button>
        {this.state.showAddCategory && (
          <AddCategory handleAddCategory={this.props.addCategory} />
        )}
        <ItemContainer
          categories={this.props.categories}
          items={this.props.budget}
          handleAddItem={this.handleAddItem}
          handleShowAddItem={this.handleShowAddItem}
          showAddItem={this.state.showAddItem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.userReducers;
  const { budget, categories } = state.budgetReducers;
  return { user, budget, categories };
};

export default connect(mapStateToProps, { addItem, addCategory })(Budget);
