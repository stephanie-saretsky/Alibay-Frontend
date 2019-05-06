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
        <button>
          <img
            className="button"
            src={"/coffee v1.png"}
            onClick={this.coffee}
          />
        </button>
        <button>
          <img className="button" src={"/tea v1.png"} onClick={this.tea} />
        </button>
      </div>
    );
  };
}

export default Main;
