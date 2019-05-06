import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";

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
      return (
        <BrowserRouter>
          <div>
            <div>
              <Search />
              <Item />
            </div>
            <div />
          </div>
          <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route exact={true} path="/login" render={this.renderLogin} />
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <div>
          <div>
            <Login />
          </div>
        </div>
        <Route exact={true} path="/signup" render={this.renderSignup} />
        <Route exact={true} path="/login" render={this.renderLogin} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = st => {
  return { login: st.login, signup: st.signup };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
