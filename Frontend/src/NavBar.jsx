import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./main.css";
import { withRouter } from "react-router-dom";
let path = "http://localhost:4000/";

class UnconnectedNavBar extends Component {
  logout = () => {
    fetch(path + "logout", { credentials: "include" })
      .then(header => {
        return header.text();
      })
      .then(body => {
        console.log("logged out", body);
      });
    this.props.dispatch({ type: "logout-success" });
    // this.props.renderLogin();
    this.props.history.push("/");
  };

  render = () => {
    console.log("AM I LOGGED IN=>", this.props.login);
    return (
      <div>
        <div>
          <Link to={"/add-item"} className="nav-button">
            Add Item
          </Link>
        </div>

        {/* ADD DROPDOWN MENU - coffee and tea

    // ADD LOGO
    // <div>
    //     <img src= "logo.png" />
    // </div> */}

        <div>
          <Link to={"/cart"}>
            <img className="cart-button" src={"/cart button.jpg"} />
          </Link>
        </div>

        <div>
          {this.props.login && (
            <button className="addToCartButton" onClick={this.logout}>
              Log out
            </button>
          )}
        </div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { login: state.login };
};

let NavBar = connect(mapStateToProps)(UnconnectedNavBar);

export default withRouter(NavBar);
