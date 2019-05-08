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
      <div>
        <div className="item-card">
          <img className="item-photo" src={this.props.item.image} />
          <h3>{this.props.item.name}</h3>
          <p>{"Quantity: " + this.props.item.quantity}</p>
          <div>
            <br />
            <p>
              <em>{this.props.item.description}</em>
            </p>
          </div>
          <br />
          <div>{"Price: " + this.props.item.price + " $"}</div>
          <br />
          <Link to={"/seller/" + this.props.item.sellerId}>Seller</Link>
          <br />
          <button className="addToCartButton" onClick={this.addToCart}>
            Add To Cart
          </button>
        </div>
        <h4>Reviews:</h4>
        <div>
          <Link
            to={{
              pathname: "/add-review-item",
              state: {
                itemId: this.props.item._id,
                name: this.props.item.name
              }
            }}
            className="nav-button"
          >
            Add a review
          </Link>
        </div>
        {this.props.reviews.map(rev => (
          <div>
            <Review
              description={rev.review}
              reviewer={rev.reviewer.name}
              reviewerId={rev.reviewer.id}
              itemId={rev.itemId}
              rating={rev.rating}
            />
            <br />
          </div>
        ))}
      </div>
    );
  };
}

export default CoffeeDetails;
