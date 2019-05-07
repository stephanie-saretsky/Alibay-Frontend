import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import "./main.css";
let path = "http://localhost:4000/";

class CoffeeDetails extends Component {
  addToCart = () => {
    console.log(this.props.item, "what is item?");
    let itemId = this.props.item._id;
    let data = new FormData();
    data.append("itemId", itemId);
    console.log("ID=>", itemId);
    fetch(path + "add-to-cart-tea", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        console.log(responseBody, "RESPONSE BODY");
        let body = JSON.parse(responseBody);
        if (body.success) {
          alert("Added to cart!");
        }
      })
      .catch(err => console.log(err));
  };

  render = () => {
    console.log("PROPS=>", this.props);
    return (
      <div className="item-card">
        <div className="item-photo">{this.props.image}</div>
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

export default CoffeeDetails;
