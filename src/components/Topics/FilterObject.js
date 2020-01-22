import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      filterInput: "",
      filteredEmployees: []
    };
  }

  handleChange = val => {
    this.setState({ filterInput: val });
  };

  handleFilter(val) {
    const { employees } = this.state;
    let filteredEmployees = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(val)) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    const { employees, filterInput, filteredEmployees } = this.state;
    console.log(filterInput);
    console.log(filteredEmployees);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={e => this.handleFilter(this.state.filterInput)}
        >
          Filter
        </button>

        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredEmployees)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
