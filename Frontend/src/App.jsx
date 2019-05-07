import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./main.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Main from "./Main.jsx";
import Tea from "./Tea.jsx";
import Coffee from "./Coffee.jsx";
import TeaDetails from "./TeaDetails.jsx";
let path = "http://localhost:4000/";

class UnconnectedApp extends Component {
  constructor() {
    super();
    this.state = {
      particularItem: {},
      particularReviews: []
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
    let data = new FormData();
    data.append("itemId", itemId);
    console.log("ID=>", itemId);
    fetch(path + "item-details-tea", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          console.log("result=>", body.item);
          console.log("Reviews=>", body.reviews);
          if (this.state.particularItem._id !== body.item._id) {
            this.setState({
              particularItem: body.item,
              particularReviews: body.reviews
            });
          }
        }
      });

    return (
      <div>
        <TeaDetails
          item={this.state.particularItem}
          reviews={this.state.particularReviews}
        />
      </div>
    );
  };

  sellerDetails = routerData => {
    let sellerId = routerData.match.params.sid;
    let data = new FormData();
    data.append("sellerId", sellerId);
    console.log("ID=>", sellerId);
    fetch(path + "item-details-tea", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          console.log("result=>", body);
          if (this.state.particularItem._id !== body.item._id) {
            this.setState({
              particularItem: body.item,
              particularReviews: body.reviews
            });
          }
        }
      });

    return (
      <div>
        <TeaDetails
          item={this.state.particularItem}
          reviews={this.state.particularReviews}
        />
      </div>
    );
  };

  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/coffee" render={this.coffee} />
        <Route exact={true} path="/tea" render={this.tea} />
        <Route exact={true} path="/seller/:sid" render={this.sellerDetails} />
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
  return { login: st.login };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
