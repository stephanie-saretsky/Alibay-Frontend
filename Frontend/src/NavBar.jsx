import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./nav.css";
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
    this.props.history.push("/");
    // this.props.renderLogin();
  };

  render = () => {
    console.log("AM I LOGGED IN=>", this.props.login);
    return (
      <div className="bar">
        <Link to={"/"}>
          <img src="/logo.png" height="80px" />
        </Link>
        <ul className="bar-items">
          <li className="dropdown">
            <button className="drop-button">Choose</button>
            <div className="dropdown-content">
              <Link>Tea</Link>
              <Link>Coffee</Link>
            </div>
          </li>
          <li className="sell-item">
            <Link to={"/add-item"} className="nav-button">
              Sell Item
            </Link>
          </li>
          <li className="logout">
            <button className="logout-button" onClick={this.logout}>
              Log out
            </button>
          </li>
          <li className="cart-button">
            <Link to={"/cart"} className="cart-link">
              <img className="cart-image" src={"/cart.png"} />
            </Link>
          </li>
        </ul>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return { login: state.login };
};

let NavBar = connect(mapStateToProps)(UnconnectedNavBar);

export default withRouter(NavBar);
