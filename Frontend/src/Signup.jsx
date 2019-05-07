import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
let path = "http://localhost:4000/";

class UnconnectedSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    console.log("new username", event);
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    console.log("new password", event);
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sign up form submitted");
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch(path + "signup", {
      method: "POST",
      body: data,
      credentials: "include"
    }) // THIS MIGHT CHANGE BASED ON WHAT MONGO WILL SEND
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
    return (
      <div className="form-box">
        <h2> Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" onChange={this.handleUsername} />
          Password:
          <input type="text" onChange={this.handlePassword} />
          <input type="submit" />
        </form>
        <p>
          If you already have an account, <Link to="/login">log in here!</Link>
        </p>
      </div>
    );
  };
}

let Signup = connect()(UnconnectedSignup);
export default Signup;
