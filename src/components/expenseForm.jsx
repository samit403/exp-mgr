import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ExpenseForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="content m-5">
        <form onSubmit={this.props.onSubmit}>
          <div className="row form-group">
            <div className="col-5">
              <label htmlFor="">Expense Amount</label>
              <input
                id="input-ass"
                type="text"
                className="form-control"
                value={this.props.entry}
                onChange={this.props.onChange}
              />
            </div>
            {/* <div className="col-5">
              <label htmlFor="">Category</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-5 mt-4">
              <label htmlFor="">Description</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-5 mt-4">
              <label htmlFor="">Date</label>
              <input type="date" className="form-control" />
            </div> */}
            <div className="col-5 mt-4">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
