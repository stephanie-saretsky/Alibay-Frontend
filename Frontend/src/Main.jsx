import React, { Component } from "react";
import Coffee from "./Coffee.jsx";
import Tea from "./Tea.jsx";

class Main extends Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="container">
        <button className="button">
          <img src={"/coffee v1.png"} onClick={this.coffee} />
        </button>
        <button className="button">
          <img src={"/tea v1.png"} onClick={this.tea} />
        </button>
      </div>
    );
  };
}

export default Main;
