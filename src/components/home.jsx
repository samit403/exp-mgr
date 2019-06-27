import React, { Component } from "react";
import NavBar from "./common/navBar";
import ExpenseForm from "./expenseForm";
import ExpenseList from "./expenseList";

class Home extends Component {
  state = {
    categoryInput: "Select",
    amountEntry: "",
    descriptionEntry: "",
    categories: [
      "Select",
      "Food / Outing",
      "Groceries",
      "Rent",
      "Transportation",
      "Recreational",
      "Loan EMI"
    ],
    data: [
      { id: 1, cat: "Groceries", amount: "120", desc: "Apples" },
      { id: 2, cat: "Food / Outing", amount: "2100", desc: "Dining" },
      { id: 3, cat: "Transportation", amount: "500", desc: "Petrol Refill" }
    ]
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //feeding the data from the input field
    const id = this.state.data.length + 1;
    let cat = this.state.categoryInput;
    let amount = this.state.amountEntry;
    let desc = this.state.descriptionEntry;
    const newItem = { id, cat, amount, desc };
    const data = this.state.data.concat(newItem);
    //setting the state to the data entered in the input field
    this.setState({ data });
    //resetting the value of the input
    this.setState({
      categoryInput: "Select",
      amountEntry: "",
      descriptionEntry: ""
    });
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <ExpenseForm
          cat={this.state.categoryInput}
          amount={this.state.amountEntry}
          desc={this.state.descriptionEntry}
          categories={this.state.categories}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ExpenseList data={this.state.data} />
      </div>
    );
  }
}

export default Home;
