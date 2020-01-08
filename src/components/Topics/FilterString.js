import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["", "", ""],
      userInput: "",
      filteredArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"></span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button className="confirmationButton"></button>
        <span className="resultsBox filterStringRB"></span>
      </div>
    );
  }
}

export default FilterString;
