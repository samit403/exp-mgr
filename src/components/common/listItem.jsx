import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item list-group-item-action list-group-item-light">
        Expense for: <b>{this.props.desc}</b> under <b>{this.props.cat} </b>
        amounts to: <b>Rs. {this.props.amount}</b>
      </li>
    );
  }
}

export default ListItem;
