import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
let path = "http://localhost:4000/";

class UnconnectedAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "tea"
    };
  }

  handleChange = event => {
    console.log("Type", event.target.value);
    this.setState({ type: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Add an item form submitted");
    let data = new FormData();
    let type = "add-item-tea";
    if (this.state.type === "coffee") {
      type = "add-item-coffee";
    }
    data.append("name");
    fetch(path + type, {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        console.log("text", x);
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        console.log("parsed body", body);
        if (!body.success) {
          alert("Username taken");
          return;
        }
        this.props.dispatch({ type: "Login" });
      });
  };

  render = () => {
    console.log("TYPE=>", this.props.type);
    return (
      <div className="form-box">
        <h2> Add {this.props.type}</h2>
        <form onSubmit={this.handleSubmit}>
          <select name="Choice" onChange={this.handleChange}>
            <option value="tea">Tea</option>
            <option value="coffee">Coffee</option>
          </select>
          <input type="submit" />
        </form>
        <p>
          If you already have an account, <Link to="/login">log in here!</Link>
        </p>
      </div>
    );
  };
}

let mapStateToProps = st => {
  console.log("State=>", st);
  return { type: st.category };
};

let AddItem = connect(mapStateToProps)(UnconnectedAddItem);
export default AddItem;
