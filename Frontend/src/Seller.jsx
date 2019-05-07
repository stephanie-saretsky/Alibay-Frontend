import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";

class Seller extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.seller.username}</h2>
        <br />
        <h3>Reviews: </h3>
        <br />
        <ul>
          {this.props.reviews.map(rev => (
            <div>
              <p>
                <strong>{rev.reviewer.name}</strong>: {rev.review}
              </p>
              <br />
            </div>
          ))}
        </ul>
        <h3>On sale:</h3>
        <br />
        <ul>
          {this.props.tea.map(tea => (
            <div>
              <p>
                <strong>{tea.name}</strong> : {tea.description}
              </p>
              <br />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Seller;
