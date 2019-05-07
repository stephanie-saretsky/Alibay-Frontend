import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import "./main.css";
// import Stripe from "./Stripe.jsx";

class TeaDetails extends Component {
  render = () => {
    console.log("PROPS=>", this.props);
    return (
      <div>
        <img src={this.props.item.image} />
        <h3>{this.props.item.name}</h3>
        <p>{"Quantity: " + this.props.item.quantity}</p>
        <div>
          <p>
            Description: <em>{this.props.item.description}</em>
          </p>
        </div>
        <div>{"price: " + this.props.item.price + " $"}</div>
        <div>
          <Link to={"/seller/" + this.props.item.sellerId}>Seller</Link>
        </div>
        <br />
        <h4>Reviews:</h4>
        {this.props.reviews.map(rev => (
          <div>
            <Review
              description={rev.review}
              reviewer={rev.reviewer.name}
              reviewerId={rev.reviewer.id}
              itemId={rev.itemId}
            />
            <br />
          </div>
        ))}
        {/* <Stripe /> */}
      </div>
    );
  };
}

export default TeaDetails;
