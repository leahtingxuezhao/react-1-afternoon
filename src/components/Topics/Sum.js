import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: "",
      number2: "",
      sum: ""
    };
  }

  handleChange1 = val => {
    this.setState({ number1: val });
  };

  handleChange2 = val => {
    this.setState({ number2: val });
  };

  handleAdd = () => {
    const sum = +this.state.number1 + +this.state.number2;
    this.setState({ sum: sum });
  };

  render() {
    console.log(this.state.number1);
    console.log(this.state.number2);
    console.log(this.state.sum);
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange1(e.target.value)}
        ></input>
        <input
          className="inputLine"
          onChange={e => this.handleChange2(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={e => this.handleAdd(this.state.sum)}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}
export default Sum;
