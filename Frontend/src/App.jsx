import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
// import Main from "./Main.jsx";

class UnconnectedApp extends Component {
  constructor() {
    super();
  }

  renderSignup = () => {
    return (
      <div>
        <Signup />
      </div>
    );
  };

  renderLogin = () => {
    return (
      <div>
        <Login />
      </div>
    );
  };

  render = () => {
    if (this.props.login) {
      return <div>{/* <Main /> */}</div>;
    }
    return (
      <div>
        <Route exact={true} path="/signup" render={this.renderSignup} />
        <Route exact={true} path="/login" render={this.renderLogin} />
        <Route exact={true} path="/" render={this.renderLogin} />
      </div>
    );
  };
}

let mapStateToProps = st => {
  return { login: st.login, signup: st.signup };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
