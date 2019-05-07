import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SearchTea extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searcheResult: null
    };
  }

  handleChange = e => {
    let newInput = e.target.value;
    this.setState({ searchInput: newInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.searchInput;
    fetch("/getTea?search=" + search)
      .then(response => response.text())
      .then(response => {
        let parsedResponse = JSON.parse(response);
        if (parsedResponse.status) {
          this.setState({ searcheResult: parsedResponse });
        }
      })
      .catch(err => console.log(err));
    this.setState({ searchInput: "" });
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange}
            placeholder="Search for tea"
          />
          <br />
          <input className="searchSubmit" type="submit" value="Search" />
        </form>
      </div>
    );
  };
}

export default SearchTea;
