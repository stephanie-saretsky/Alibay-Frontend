import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    console.log("user enter a username ", event.target.value);
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    console.log("user enter a username ", event.target.value);
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("login form submitted");
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch("http://159.89.112.34:4000/login", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (!body.success) {
          alert("login failed");
          return;
        } else if (body.success) {
          this.props.dispatch({
            type: "login-success"
          });
          return;
        }
        this.props.dispatch({
          type: "login-success"
        });
      });
  };

  render = () => {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          Username
          <input type="text" onChange={this.handleUsernameChange} />
          Password
          <input type="text" onChange={this.handlePasswordChange} />
          <input type="submit" />
        </form>
        <Link />
      </div>
    );
  };
}

let Login = connect()(UnconnectedLogin);

export default Login;
