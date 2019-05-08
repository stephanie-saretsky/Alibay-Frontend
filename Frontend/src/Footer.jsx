import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./footer.css";

class Footer extends Component {
  render = () => {
    return (
      <footer>
        <section id="footer">
          <div className="image">
            <img src="/logo.png" height="40px" />
            <hr />
            <div>Contact</div>
          </div>
        </section>
      </footer>
    );
  };
}

export default Footer;
