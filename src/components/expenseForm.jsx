import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ExpenseForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="content m-4">
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col-5">
              <label htmlFor="">Expense Amount</label>
              <input
                id="expense-amount"
                type="text"
                className="form-control"
                value={this.props.entry}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col-5">
              <label htmlFor="">Expense Description</label>
              <input
                id="expense-description"
                type="text"
                className="form-control"
                value={this.props.entry}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col-5">
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
