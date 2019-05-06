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
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    fetch("/login", {
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
        }
        this.props.dispatch({
          type: "login-success"
        });
        return;
      });

    this.setState({ username: "", password: "" });
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
        <p>
          You don't have an account yet, please
          <Link to={"/signup/"}>sign up here! </Link>
        </p>
      </div>
    );
  };
}

let Login = connect()(UnconnectedLogin);

export default Login;
