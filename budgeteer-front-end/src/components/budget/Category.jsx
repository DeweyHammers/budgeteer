import React, { Component } from "react";
import AddItem from "./AddItem";
import Item from "./Item";
import EditCategory from "./EditCategory";
import { connect } from "react-redux";
import { addItem } from "../../redux/budget/budgetActions";

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

  renderCategoryName = () => {
    return (
      <h1>
        {this.props.category}{" "}
        <button onClick={this.handleShowEditCategory}>X</button>
      </h1>
    );
  };

  render() {
    return (
      <div>
        {!this.state.editCategory ? (
          this.renderCategoryName()
        ) : (
          <EditCategory
            closeEdit={this.handleShowEditCategory}
            category={this.props.category}
          />
        )}
        <button onClick={this.handleShowAddItem}>Add Item</button>
        {this.state.showAddItem && (
          <AddItem
            closeAdd={this.handleShowAddItem}
            category={this.props.category}
            addItem={this.handleAddItem}
          />
        )}
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Amount</th>
              <th>Cost Per Month</th>
              <th>Assign Money</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userReducers.user };
};

export default connect(mapStateToProps, { addItem })(Category);
