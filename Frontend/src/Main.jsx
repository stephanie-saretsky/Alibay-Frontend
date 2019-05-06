import React, { Component } from "react";
import Coffee from "./Coffee.jsx";
import Tea from "./Tea.jsx";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container">
        <Link to={"/coffee"} className="button">
          <img src={"/coffee v1.png"} />
        </Link>
        <Link to={"/tea"} className="button">
          <img src={"/tea v1.png"} />
        </Link>
      </div>
    );
  };
}

export default Main;
