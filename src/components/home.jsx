import React, { Component } from "react";
import NavBar from "./common/navBar";
import ExpenseForm from "./expenseForm";
import ExpenseList from "./expenseList";

class Home extends Component {
  state = {
    amountEntry: "",
    descriptionEntry: "",
    data: [
      { id: 1, amount: "120", desc: "Apples" },
      { id: 2, amount: "2100", desc: "Dining" },
      { id: 3, amount: "500", desc: "Petrol Refill" }
    ]
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state.amountEntry);
  };

  handleSubmit = e => {
    e.preventDefault();
    //feeding the data from the input field
    let amount = this.state.amountEntry;
    let desc = this.state.descriptionEntry;
    const id = this.state.data.length + 1;
    const newItem = { id, amount, desc };
    const data = this.state.data.concat(newItem);
    //setting the state to the data entered in the input field
    this.setState({ data });
    //resetting the value of the input

    document.getElementById("amountEntry").value = "";
    document.getElementById("descriptionEntry").value = "";
  };

  render() {
    return (
      <div className="container">
        <NavBar />
        <ExpenseForm
          amount={this.state.amountEntry}
          desc={this.state.descriptionEntry}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ExpenseList data={this.state.data} />
      </div>
    );
  }
}

export default Home;
