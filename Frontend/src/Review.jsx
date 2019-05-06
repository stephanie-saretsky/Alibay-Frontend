import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class Review extends Component {
  render() {
    return (
      <div>
        <div>{this.props.description}</div>
        <Link to={"/reviewer/" + this.props.reviewerId}>Reviewer Details.</Link>
      </div>
    );
  }
}

export default Review;
