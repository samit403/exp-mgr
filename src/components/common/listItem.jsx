import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item list-group-item-action list-group-item-light">
        <div className="row">
          <input
            className="m-2 mr-5"
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <span className="col-1 m-1 badge badge-pill badge-info">
            {this.props.cat}
          </span>
          <div className="col">
            Expense for: <b>{this.props.desc} </b> | Amount spent:
            <b> ₹ {this.props.amount}</b>
          </div>
          <div className="col justify-content-end">
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={this.props.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
