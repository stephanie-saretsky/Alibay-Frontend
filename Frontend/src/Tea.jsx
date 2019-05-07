import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchTea from "./SearchTea.jsx";
let path = "http://demo1992437.mockable.io/";

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
        if (body.success) {
          this.setState({ teas: body.teaItems });
        }
      });
  };

  handleChange = e => {
    let newInput = e.target.value;
    this.setState({ searchInput: newInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.searchInput;
    fetch("path+/search-item-tea?search=" + search)
      .then(response => response.text())
      .then(response => {
        let parsedResponse = JSON.parse(response);
        console.log("Response Body =>", parsedResponse);
        if (parsedResponse.success) {
          this.setState({ teas: parsedResponse.items });
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
