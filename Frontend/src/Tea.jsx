import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
let path = "http://localhost:4000/";

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
    fetch(path + "tea", {
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
          this.props.dispatch({ type: "tea" });
        }
      });
  };

  handleChange = e => {
    console.log(e.target.value);
    let newInput = e.target.value;
    this.setState({ searchInput: newInput });
  };

  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.searchInput;
    fetch(path + "search-item-tea?search=" + search)
      .then(response => response.text())
      .then(response => {
        let parsedResponse = JSON.parse(response);
        console.log("Response Body =>", parsedResponse);
        if (parsedResponse.success) {
          console.log("array of search=>", parsedResponse.items);
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
        <div>
          <ul className="list-item-container">
            {this.state.teas.map(tea => {
              return (
                <div className="list-item-card">
                  <Link to={"tea/" + tea._id}>
                    <img className="item-photo" src={tea.image} />
                  </Link>
                  <h3>{tea.name}</h3>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
        <div />
      </div>
    );
  };
}

let Tea = connect()(unconnectedTea);

export default Tea;
