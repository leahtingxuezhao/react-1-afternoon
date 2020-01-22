import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      checkAnswer: ""
    };
  }

  handleChange = val => {
    this.setState({ inputString: val });
  };
  reverseStr = str => {
    return str
      .split("")
      .reverse()
      .join("");
  };

  handleCheck = val => {
    if (val === this.reverseStr(val)) {
      this.setState({ checkAnswer: "true" });
    } else {
      this.setState({ checkAnswer: "false" });
    }
  };

  render() {
    console.log(this.state.inputString);
    console.log(this.state.checkAnswer);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={e => this.handleCheck(this.state.inputString)}
        >
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.checkAnswer}</span>
      </div>
    );
  }
}

export default Palindrome;
