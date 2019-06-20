import React, { Component } from "react";
import NavBar from "./common/navBar";
import ExpenseForm from "./expenseForm";
import ExpenseList from "./expenseList";

class Home extends Component {
  state = {
    entry: "",
    data: [
      { id: 1, amount: "100" },
      { id: 2, amount: "200" },
      { id: 3, amount: "300" }
    ]
  };

  handleChange = e => {
    this.setState({ entry: e.target.value });
    console.log(this.state.entry);
  };

  handleSubmit = e => {
    e.preventDefault();
    let amount = this.state.entry;
    const id = this.state.data.length + 1;
    const newItem = { id, amount };

    const data = this.state.data.concat(newItem);

    this.setState({ data: data });
    console.log(e);
    document.getElementById("input-ass").value = "";
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
