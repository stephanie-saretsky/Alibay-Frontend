import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Main from "./Main.jsx";
import Tea from "./Tea.jsx";

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

  coffee = () => {
    return (
      <div>
        <Coffee />
      </div>
    );
  };

  tea = () => {
    return (
      <div>
        <Tea />
      </div>
    );
  };

  render = () => {
    if (this.props.login) {
      return (
        <div>
          <Main />
        </div>
      );
    }
    return (
      <div>
        <Route exact={true} path="/coffee" render={this.coffee} />
        <Route exact={true} path="/tea" render={this.tea} />
        <Route exact={true} path="/tea/:tid" render={this.renderTeas} />
        <Route exact={true} path="/tea/:cid" render={this.renderCoffees} />
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
