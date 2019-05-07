import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class Seller extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.seller.username}</h4>
        <h5>Reviews: </h5>
        <ul>
          {this.props.reviews.map(review => {
            return (
              <div>
                <h3>{coffee.name}</h3>
                <p>{coffee.price + "$"}</p>
                <p>
                  <Link to={"/coffee/" + coffee.id}>More details</Link>}
                </p>
              </div>
            );
          })}
        </ul>
        <h5>On sale:</h5>
        <ul>{}</ul>
      </div>
    );
  }
}

export default Seller;
