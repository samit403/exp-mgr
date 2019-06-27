import React, { Component } from "react";

class ExpenseList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="content">
        <h4 className="content ml-5">Expense List</h4>
        <ul className="m-4">
          {this.props.data.map(item => (
            <li key={item.id}>
              Expense for: <b>{item.desc}</b> amounts to:{" "}
              <b>Rs. {item.amount}</b>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
