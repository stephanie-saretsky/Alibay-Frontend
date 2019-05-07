import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import "./main.css";
import Stripe from "./Stripe.jsx";

class TeaDetails extends Component {
  render = () => {

    addToCart = () => 
    fetch("/add-to-cart-tea" + search)
    .then(response => response.text())
    .then(response => {
      let parsedResponse = JSON.parse(response);
      console.log("Response Body =>", parsedResponse);
      if (parsedResponse.status) {
       
      }
    })
    .catch(err => console.log(err));
  this.setState({ searchInput: "" });
};
    // add fetch request for reviews
    // let newReviews = reviews.filter(rev => {
    //   return rev.itemId === this.props.item.id;
    // });
    return (
      <div>
        <div>{this.props.image}</div>
        <div>{this.props.itemName}</div>
        <div>
          <em>{this.props.description}</em>
        </div>
        <div>{this.props.price}</div>
        <Link to={"/seller/" + this.props.sellerId}>Seller Information</Link>
        <br />
        {/* <h4>Reviews:</h4>
        {newReviews.map(rev => (
          <Review
            description={rev.description}
            reviewerId={rev.reviewerId}
            itemId={rev.itemId}
          />
        ))} */}
        <button className="cart-button" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    );
  };
}

export default TeaDetails;
