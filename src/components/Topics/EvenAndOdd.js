import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange = val => {
    this.setState({ userInput: val });
  };

  handleSplit = () => {
    const { userInput } = this.state;
    const rawArray = userInput.split(",");
    const tempEven = [];
    const tempOdd = [];
    let i = 0;
    for (i = 0; i < rawArray.length; i++) {
      if (rawArray[i] % 2 === 0) {
        tempEven.push(rawArray[i]);
        this.setState({ evenArray: tempEven });
      } else {
        tempOdd.push(rawArray[i]);
        this.setState({ oddArray: tempOdd });
      }
    }
    this.setState({
      userInput: ""
    });
  };

  render() {
    console.log(this.state.userInput);
    console.log(this.state.evenArray);
    console.log(this.state.oddArray);
    console.log(this.state.userInput);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
          value={this.state.userInput}
        ></input>
        <button
          className="confirmationButton"
          onClick={e => this.handleSplit()}
        >
          Split
        </button>
        <span className="resultsBox">
          Odds:[{this.state.oddArray.join(",")}]
        </span>
        <span className="resultsBox">
          Evens:[{this.state.evenArray.join(",")}]
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
