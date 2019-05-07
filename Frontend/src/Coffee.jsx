import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class unconnectedCoffee extends Component {
  constructor() {
    super();
    this.state = {
      coffees: [],
      searchInput: ""
    };
  }

  componentDidMount = () => {
    console.log("coffees rendering");
    fetch("/coffee", {
      method: "GET",
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        this.setState({ coffees: body });
      });
  };

  handleChange = e => {
    let newInput = e.target.value;
    console.log(newInput);
    this.setState({ searchInput: newInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.searchInput;
    fetch("/getCoffee?search=" + search)
      .then(response => response.text())
      .then(response => {
        let parsedResponse = JSON.parse(response);
        console.log("Response Body =>", parsedResponse);
        if (parsedResponse.status) {
          this.setState({ coffees: parsedResponse });
        }
      })
      .catch(err => console.log(err));
    this.setState({ searchInput: "" });
  };

  render = () => {
    return (
      <div>
        <h2>Coffees:</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={this.handleChange}
              placeholder="Search for coffee"
            />
            <br />
            <input className="searchSubmit" type="submit" value="Search" />
          </form>
        </div>
        <ul>
          {this.state.coffees.map(tea => {
            return (
              <div>
                <h3>{coffee.name}</h3>
                <p>{coffee.price + "$"}</p>
                <p>
                  <Link to={"/coffee/" + coffee.id}>More details</Link>}
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

let Coffee = connect()(unconnectedCoffee);

export default Coffee;
