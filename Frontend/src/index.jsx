import ReactDOM from "react-dom";
import "./main.css";
import React, { Component } from "react";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
