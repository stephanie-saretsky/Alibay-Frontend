import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import "./main.css";
// import Stripe from "./Stripe.jsx";

class TeaDetails extends Component {
  render = () => {
    // let newReviews = this.props.reviews.filter(rev => {
    //   return rev.itemId === this.props.item.id;
    // });

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
        <Link to={"/seller/" + this.props.item.sellerId}>Seller</Link>
        <br />
        <h4>Reviews:</h4>
        {this.props.reviews.map(rev => (
          <Review
            description={rev.review}
            reviewer={rev.reviewer.name}
            reviewerId={rev.reviewer.id}
            itemId={rev.itemId}
          />
        ))}
        {/* <Stripe /> */}
      </div>
    );
  };
}

export default TeaDetails;
