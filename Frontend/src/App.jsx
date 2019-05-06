import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";

class UnconnectedApp extends Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <BrowserRouter>
        <div>
          <section>
            <Login />
          </section>
          <Route exact={true} path="/login" render={this.handleLogin} />
          <Route exact={true} path="/signup" render={this.handleSignup} />
        </div>
      </BrowserRouter>
    );
  };
}
let mapStateToProps = st => {
  return { login: st.login, signup: st.signup, admin: st.admin };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
