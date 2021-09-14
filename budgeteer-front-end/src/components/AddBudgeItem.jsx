import React, { Component } from "react";

class AddbudgeItem extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="category Name" />
        <input type="number" placeholder="Cost Per Month" />
        <input type="number" placeholder="Assign Money" />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default AddbudgeItem;
