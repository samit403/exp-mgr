import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";

class ExpenseForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="content m-4">
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col-2">
              <label htmlFor="descriptionEntry">Expense Category</label>
              <select
                name="categoryInput"
                value={this.props.cat}
                className="form-control form-control"
                onChange={this.props.onChange}
              >
                <option value={this.props.categories[0]}>
                  {this.props.categories[0]}
                </option>
                <option value={this.props.categories[1]}>
                  {this.props.categories[1]}{" "}
                </option>
                <option value={this.props.categories[2]}>
                  {this.props.categories[2]}
                </option>
                <option value={this.props.categories[3]}>
                  {this.props.categories[3]}
                </option>
                <option value={this.props.categories[4]}>
                  {this.props.categories[4]}
                </option>
                <option value={this.props.categories[5]}>
                  {this.props.categories[5]}
                </option>
                <option value={this.props.categories[6]}>
                  {this.props.categories[6]}
                </option>
              </select>
            </div>
            <div className="col-4">
              <label htmlFor="amountEntry">Expense Amount</label>
              <input
                name="amountEntry"
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                value={this.props.amount}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="descriptionEntry">Expense Description</label>
              <input
                name="descriptionEntry"
                type="text"
                className="form-control"
                placeholder="Enter Description"
                value={this.props.desc}
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
