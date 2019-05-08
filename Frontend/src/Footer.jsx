import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./footer.css";

class Footer extends Component {
  render = () => {
    return (
      <footer>
        <section className="footer">
          <div>Contact</div>
        </section>
      </footer>
    );
  };
}

export default Footer;
