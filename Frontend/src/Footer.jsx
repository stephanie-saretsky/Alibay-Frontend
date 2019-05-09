import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./footer.css";

class Footer extends Component {
  render = () => {
    return (
      <footer id="footer">
        <section>
          <div className="image">
            <img src="/logo.png" height="40px" />
            <hr />
            <p>Contact us</p>
          </div>
          <hr />
          <div className="flex">
            <div>
              <a
                href={"http://www.facebook.com/pages/Rishi-Tea/39035256828"}
                target={"_blank"}
              >
                <img src={"/facebook.png"} height="20px" />
              </a>
            </div>
            <div>
              <a href={"http://twitter.com/RishiTea"} target={"_blank"}>
                <img src={"/twitter.png"} height="20px" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    );
  };
}
1;
export default Footer;
