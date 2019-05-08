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
        <img src="/logo.png" height="80px" />
        <div>
          <Link to={"/add-item"} className="nav-button">
            Add Item
          </Link>

          {/* ADD DROPDOWN MENU - coffee and tea

    // ADD LOGO
    // <div>
    //     <img src= "logo.png" />
    // </div> */}

          <Link to={"/cart"} className="nav-button">
            <img className="cart-button" src={"/cart button.png"} />
          </Link>

          <button className="logout-button" onClick={this.logout}>
            Log out
          </button>
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
