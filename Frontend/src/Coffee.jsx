import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import Search from "./search.jsx";

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
        this.setState({ teas: body });
      });
  };

  render = () => {
    console.log("coffees:");
    return (
      <div>
        <h2>Coffees:</h2>
        {/* <Search /> */}
        <ul>
          {this.state.coffees.map(coffee => {
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
