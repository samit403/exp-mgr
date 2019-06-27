import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item list-group-item-action list-group-item-light">
        <div className="row">
          <span className="col-2 badge badge-pill badge-dark">
            {this.props.cat}
          </span>
          <div className="col">
            Expense for: <b>{this.props.desc} </b> | Amount spent:
            <b> ₹ {this.props.amount}</b>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
