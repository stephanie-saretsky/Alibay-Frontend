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
      <div>
        <button onClick={this.coffee} />
        <button onClick={this.tea} />
      </div>
    );
  };
}

export default Main;
