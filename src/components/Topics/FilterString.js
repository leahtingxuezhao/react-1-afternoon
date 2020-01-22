import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
  }
  handleChange = val => {
    this.setState({ userInput: val });
  };
  handleFilter = val => {
    const { names } = this.state;
    const filteredNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(val) === true) {
        filteredNames.push(names[i]);
      }
    }
    this.setState({ filteredNames: filteredNames });
  };

  render() {
    console.log(this.state.userInput);
    console.log(this.state.filteredNames);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={e => this.handleFilter(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          FilteredNames: {JSON.stringify(this.state.filteredNames)}
        </span>
      </div>
    );
  }
}

export default FilterString;
