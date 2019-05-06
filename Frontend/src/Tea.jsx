import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import Search from "./search.jsx";

class unconnectedTea extends Component {
  constructor() {
    super();
    this.state = {
      teas: [],
      searchInput: ""
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

  renderItem = () => {
    return (
      <div>
        <Item />
      </div>
    );
  };

  render = () => {
    console.log("Teas:");
    return (
      <div>
        <h2>Teas:</h2>
        {/* <Search /> */}
        <ul>
          {this.props.teas.map(tea => {
            return (
              <div>
                <h3>{tea.name}</h3>
                <p>{tea.price}</p>
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
