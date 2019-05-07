import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchTea from "./SearchTea.jsx";

class unconnectedTea extends Component {
  constructor() {
    super();
    this.state = {
      teas: [],
      searchInput: "",
      searchResult: null
    };
  }

  componentDidMount = () => {
    console.log("teas rendering");
    fetch("/tea", {
      method: "GET",
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        this.setState({ teas: body });
      });
  };

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
        <h2>Teas:</h2>
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
        <ul>
          {this.state.teas.map(tea => {
            return (
              <div>
                <h3>{tea.name}</h3>
                <p>{tea.price + "$"}</p>
                <p>
                  <Link to={"/tea/" + tea.id}>More details</Link>}
                </p>
              </div>
            );
          })}
        </ul>
        <div />
      </div>
    );
  };
}

let Tea = connect()(unconnectedTea);

export default Tea;
