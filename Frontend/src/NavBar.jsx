import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./main.css";
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
  };

  render = () => {
    <div>
      {/* // ADD DROPDOWN MENU - coffee and tea

    // ADD LOGO
    // <div>
    //     <img src= "logo.png" />
    // </div>

    CART BUTTON */}
      <div>
        <Link to={"/cart"} className="cart-button">
          <img src={"/cart button.jpg"} />
        </Link>
      </div>
      {/* LOG OUT BUTTON */}
      <div>
        <button onClick={this.logout}>Log out</button>
      </div>
    </div>;
  };
}

let NavBar = connect()(UnconnectedNavBar);

export default NavBar;
