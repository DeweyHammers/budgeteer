import React, { Component } from "react";
import ShowItem from "./ShowItem";
import EditItem from "./EditItem";

class Item extends Component {
  state = {
    showEdit: false,
    checked: false,
  };

  handleShowEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit,
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            value=""
            checked={this.state.checked}
            onChange={this.handleShowEdit}
          />
        </td>
        {!this.state.showEdit ? (
          <ShowItem item={this.props.item} />
        ) : (
          <EditItem
            closeEdit={this.handleShowEdit}
            category={this.props.category}
            item={this.props.item}
          />
        )}
      </tr>
    );
  }
}

export default Item;
