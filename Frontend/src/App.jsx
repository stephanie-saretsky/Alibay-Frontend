import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./main.css";
import "./footer.css";
import Login from "./Login.jsx";
import { connect } from "react-redux";
import Signup from "./Signup.jsx";
import Main from "./Main.jsx";
import Tea from "./Tea.jsx";
import Coffee from "./Coffee.jsx";
import TeaDetails from "./TeaDetails.jsx";
import CoffeeDetails from "./CoffeeDetails.jsx";
import Seller from "./Seller.jsx";
import AddItem from "./AddItem.jsx";
import NavBar from "./NavBar.jsx";
import Cart from "./Cart.jsx";
import AddReview from "./AddReview.jsx";
import AddReviewSeller from "./AddReviewSeller.jsx";
let path = "http://localhost:4000/";

class UnconnectedApp extends Component {
  constructor() {
    super();
    this.state = {
      particularItem: {},
      particularReviews: [],
      particularSeller: {},
      sellerTea: [],
      sellerCoffee: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/login-check", {
      credentials: "include"
    })
      .then(responseHeader => {
        return responseHeader.text();
      })
      .then(responseBody => {
        let parsed = JSON.parse(responseBody);
        if (parsed.success) {
          this.props.dispatch({ type: "Login" });
        }
      });
  };

  renderItem = () => {
    return (
      <div>
        <AddItem />
      </div>
    );
  };

  renderReviewItem = params => {
    console.log("Parameters=>", params);
    return (
      <div>
        <AddReview
          itemId={params.location.state.itemId}
          name={params.location.state.name}
        />
      </div>
    );
  };

  renderAddReviewSeller = params => {
    console.log("Parameters=>", params);
    return (
      <div>
        <AddReviewSeller
          sellerId={params.location.state.sellerId}
          name={params.location.state.name}
        />
      </div>
    );
  };

  renderCart = () => {
    return (
      <div>
        <Cart />
      </div>
    );
  };

  renderSignup = () => {
    if (this.props.login) {
      return (
        <div>
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Signup />
        </div>
      );
    }
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

  coffeeDetails = routerData => {
    let itemId = routerData.match.params.cid;
    let data = new FormData();
    data.append("itemId", itemId);
    console.log("ID=>", itemId);
    fetch(path + "item-details-coffee", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        console.log("result=>", body.item);
        console.log("Reviews=>", body.reviews);
        if (body.success) {
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
        <CoffeeDetails
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
    fetch(path + "seller-details", {
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
          if (this.state.particularSeller.id !== body.seller.id) {
            this.setState({
              particularSeller: body.seller,
              particularReviews: body.reviews,
              sellerCoffee: body.coffeeItems,
              sellerTea: body.teaItems
            });
          }
          console.log(this.state);
        }
      });

    return (
      <div>
        <Seller
          seller={this.state.particularSeller}
          reviews={this.state.particularReviews}
          tea={this.state.sellerTea}
          coffee={this.state.sellerCoffee}
        />
      </div>
    );
  };

  render = () => {
    return (
      <div>
        <BrowserRouter>
          <NavBar renderLogin={this.renderLogin} />

          <Route exact={true} path="/cart" render={this.renderCart} />
          <Route exact={true} path="/add-item" render={this.renderItem} />
          <Route
            exact={true}
            path="/add-review-item"
            render={this.renderReviewItem}
          />
          <Route
            exact={true}
            path="/add-review-seller"
            render={this.renderAddReviewSeller}
          />
          <Route exact={true} path="/coffee" render={this.coffee} />
          <Route exact={true} path="/tea" render={this.tea} />
          <Route exact={true} path="/seller/:sid" render={this.sellerDetails} />
          <Route exact={true} path="/tea/:tid" render={this.teaDetails} />
          <Route exact={true} path="/coffee/:cid" render={this.coffeeDetails} />
          <Route exact={true} path="/signup" render={this.renderSignup} />
          <Route exact={true} path="/login" render={this.renderLogin} />
          <Route exact={true} path="/" render={this.renderLogin} />
          <footer>
            <section>
              <div>Contact</div>
            </section>
          </footer>
        </BrowserRouter>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return { login: st.login };
};

let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
