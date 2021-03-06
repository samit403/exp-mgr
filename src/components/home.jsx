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
      "Food",
      "Grocery",
      "Rent",
      "Transport",
      "Recreation",
      "Loan EMI"
    ],
    data: [
      { id: 1, cat: "Grocery", amount: "120", desc: "Apples" },
      { id: 2, cat: "Food", amount: "2100", desc: "Dining" },
      { id: 3, cat: "Transport", amount: "500", desc: "Petrol Refill" },
      { id: 4, cat: "Recreation", amount: "300", desc: "Milds" }
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

  handeDelete = item => {
    console.log(item);
    const data = this.state.data.filter(i => i.id !== item.id);
    this.setState({ data });
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
        <ExpenseList data={this.state.data} onDelete={this.handeDelete} />
      </div>
    );
  }
}

export default Home;
