import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/footer.css";

class Footer extends Component {
  onClick = () => {
    console.log("On clique sur contact");
  };

  render = () => {
    return (
      <footer id="footer" className="flex">
        <div className="para">
          <p>
            <Link className="link" onClick={this.onClick}>
              Contact
            </Link>
          </p>
        </div>
        <div className="image">
          <img className="imageOne" src="/logo.png" height="50px" />
        </div>
        <div className="flex">
          <div>
            <a
              href={"http://www.facebook.com/pages/Rishi-Tea/39035256828"}
              target={"_blank"}
            >
              <img className="imageOne" src={"/facebook.png"} height="20px" />
            </a>
          </div>
          <div>
            <a href={"http://twitter.com/RishiTea"} target={"_blank"}>
              <img className="imageOne" src={"/twitter.png"} height="20px" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
}
1;
export default Footer;
