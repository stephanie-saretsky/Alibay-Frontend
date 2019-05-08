import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class Review extends Component {
  // renderRating = props => {
  //   let stars = [];
  //   for (let i = 0; i < props.rating; i++) {
  //     stars = stars.concat("★");
  //   }
  //   return stars;
  // };

  render() {
    return (
      <div>
        <h4>{this.props.reviewer + ": "}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Review;
