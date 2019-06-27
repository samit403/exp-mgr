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
              <label htmlFor="amountEntry">Expense Amount</label>
              <input
                id="amountEntry"
                name="amountEntry"
                type="number"
                className="form-control"
                value={this.props.amountEntry}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col-5">
              <label htmlFor="descriptionEntry">Expense Description</label>
              <input
                id="descriptionEntry"
                name="descriptionEntry"
                type="text"
                className="form-control"
                value={this.props.descriptionEntry}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
