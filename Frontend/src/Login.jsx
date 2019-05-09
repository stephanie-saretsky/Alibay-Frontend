import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./login-signup.css";
let path = "http://localhost:4000/";

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
    fetch(path + "login", {
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
          type: "Login"
        });
        return;
      });

    this.setState({ username: "", password: "" });
  };

  render = () => {
    return (
      <div className="login-signup-form">
        <form className="login-inputs-container" onSubmit={this.handleSubmit}>
          <input
            className="login-inputs"
            type="text"
            placeholder="username"
            onChange={this.handleUsernameChange}
          />
          <input
            className="login-inputs"
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          />
          <input className="login-button" type="submit" value="Login" />
        </form>

        <p className="register">
          Not registered?{" "}
          <Link className="login-link" to="/signup/">
            Sign up here!{" "}
          </Link>
        </p>
      </div>
    );
  };
}

let Login = connect()(UnconnectedLogin);

export default Login;
