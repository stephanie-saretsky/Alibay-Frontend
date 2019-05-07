import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class Review extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.reviewer + ": "}</h4>
        <p>{this.props.description}</p>
        <Link to={"/reviewer/" + this.props.reviewerId}>Reviewer Details.</Link>
      </div>
    );
  }
}

export default Review;
