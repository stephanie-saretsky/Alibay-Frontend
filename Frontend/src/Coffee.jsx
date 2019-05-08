import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
let path = "http://localhost:4000/";

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
    fetch(path + "coffee", {
      method: "GET",
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          this.setState({ coffees: body.coffeeItems });
          this.props.dispatch({ type: "coffee" });
        }
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
    fetch(path + "search-item-coffee?search=" + search)
      .then(response => response.text())
      .then(response => {
        let parsedResponse = JSON.parse(response);
        console.log("Response Body =>", parsedResponse);
        if (parsedResponse.success) {
          this.setState({ coffees: parsedResponse.items });
        }
      })
      .catch(err => console.log(err));
    this.setState({ searchInput: "" });
  };

  render = () => {
    return (
      <div>
        <div className="wrap">
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="searchTerm"
              value={this.state.searchInput}
              onChange={this.handleChange}
              placeholder="Search for coffee"
            />
            <br />
            <input className="searchButton" type="submit" value="Search" />
          </form>
        </div>
        <ul className="list-item-container">
          {this.state.coffees.map(coffee => {
            return (
              <div className="list-item-card">
                <Link to={"/coffee/" + coffee._id}>
                  <img className="item-photo" src={coffee.image} />
                </Link>
                <h3>{coffee.name}</h3>
                <br />
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
