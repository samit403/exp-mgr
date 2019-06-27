import React, { Component } from "react";
import NavBar from "./common/navBar";
import ExpenseForm from "./expenseForm";
import ExpenseList from "./expenseList";

class Home extends Component {
  state = {
    entry: "",
    data: [
      { id: 1, amount: "120", desc: "Apples" },
      { id: 2, amount: "2100", desc: "Dining" },
      { id: 3, amount: "500", desc: "Petrol Refill" }
    ]
  };

  handleChange = e => {
    this.setState({ entry: e.target.value });
    // console.log(this.state.entry);
  };

  handleSubmit = e => {
    e.preventDefault();
    //feeding the data from the input field
    let amount = this.state.entry;
    const id = this.state.data.length + 1;
    const newItem = { id, amount };
    const data = this.state.data.concat(newItem);
    //setting the state to the data entered in the input field
    this.setState({ data });
    //resetting the value of the input
    document.getElementById("expense-amount").value = "";
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <ExpenseForm
          amount={this.state.entry}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ExpenseList data={this.state.data} />
      </div>
    );
  }
}

export default Home;
