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
    fetch(path + "add-to-cart-coffee", {
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
        <img className="item-photo" src={this.props.item.image} />
        <h3>{this.props.item.name}</h3>
        <p>{"Quantity: " + this.props.item.quantity}</p>
        <div>
          <em>{this.props.item.description}</em>
        </div>
        <div>{"Price: " + this.props.item.price + " $"}</div>
        <Link to={"/seller/" + this.props.item.sellerId}>Seller</Link>
        <br />
        <h4>Reviews:</h4>
        {this.props.reviews.map(rev => (
          <Review
            description={rev.description}
            reviewerId={rev.reviewerId}
            itemId={rev.itemId}
          />
        ))}
        <button className="cart-button" onClick={this.addToCart}>
          Add To Cart
        </button>
      </div>
    );
  };
}

export default CoffeeDetails;
