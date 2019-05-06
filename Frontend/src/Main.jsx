import React, { Component } from "react";
import Coffee from "./Coffee.jsx";
import Tea from "./Tea.jsx";

class Main extends Component {
  constructor() {
    super();
  }

  coffee = () => {
    return (
      <div>
        <Coffee />
      </div>
    );
  };

  tea = () => {
    return (
      <div>
        <Tea />
      </div>
    );
  };

  render = () => {
    return (
      <div className="container">
        <Link to="/coffee">
          <button className="button">
            <img src={"/coffee v1.png"} onClick={this.coffee} />
          </button>
        </Link>
        <Link to="/tea">
          <button className="button">
            <img src={"/tea v1.png"} onClick={this.tea} />
          </button>
        </Link>
      </div>
    );
  };
}

export default Main;
