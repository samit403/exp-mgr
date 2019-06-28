import React, { Component } from "react";
import ListItem from "./common/listItem";

class ExpenseList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="content">
        <h4 className="content">Expense List</h4>
        <ul className="list-group m-1">
          {this.props.data.map(item => (
            <ListItem
              key={item.id}
              amount={item.amount}
              desc={item.desc}
              cat={item.cat}
              onDelete={() => this.props.onDelete(item)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
