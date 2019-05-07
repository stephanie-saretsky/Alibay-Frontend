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
          {this.state.coffees.map(coffee => {
            return (
              <div>
                <h3>{coffee.name}</h3>
                <p>{coffee.price + "$"}</p>
                <p>
                  <Link to={"/coffee/" + coffee._id}>More details</Link>
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
