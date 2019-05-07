import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Main from "./Main.jsx";
import Tea from "./Tea.jsx";
import Coffee from "./Coffee.jsx";
let path = "http://localhost:4000/";

class UnconnectedApp extends Component {
  constructor() {
    super();
    this.state = {
      item: null
    };
  }

  renderSignup = () => {
    return (
      <div>
        <Signup />
      </div>
    );
  };

  renderLogin = () => {
    if (this.props.login) {
      return (
        <div>
          <Main />
        </div>
      );
    }
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
    console.log("tea page");
    return (
      <div>
        <Tea />
      </div>
    );
  };

  teaDetails = routerData => {
    let itemId = routerData.match.params.tid;

    fetch(path + "/item-details-tea", {
      method: post,
      body: itemId,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          console.log("result=>", body.item);
          this.setState({ particularItem: body.item });
        }
      });

    return (
      <div>
        <TeaDetails item={this.state.item} />
      </div>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/coffee" render={this.coffee} />
        <Route exact={true} path="/tea" render={this.tea} />
        <Route exact={true} path="/tea/:tid" render={this.teaDetails} />
        <Route exact={true} path="/coffee/:cid" render={this.coffeeDetails} />
        <Route exact={true} path="/signup" render={this.renderSignup} />
        <Route exact={true} path="/login" render={this.renderLogin} />
        <Route exact={true} path="/" render={this.renderLogin} />
      </BrowserRouter>
    );
  };
}

let mapStateToProps = st => {
  return { login: st.login, signup: st.signup };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
