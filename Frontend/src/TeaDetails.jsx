import React, { Component } from "react";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";
import "./main.css";
// import Stripe from "./Stripe.jsx";

class TeaDetails extends Component {
<<<<<<< HEAD
  // addToCart = () => {
  //   console.log(this.props.item, "what is item?");
  //   fetch("/add-tea-to-cart", {
  //     method: "POST",
  //     body: this.props.item,
  //     credentials: "include"
  //   })
  //     .then(x => {
  //       return x.text();
  //     })
  //     .then(responseBody => {
  //       let body = JSON.parse(responseBody);
  //       if (body.status) {
  //         alert("Added to cart!");
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  // add fetch request for reviews
  // let newReviews = reviews.filter(rev => {
  //   return rev.itemId === this.props.item.id;
  // });
=======
>>>>>>> 1608d270675ff08b527e821bd2b4742f31d10bb4
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
        {/* <button className="cart-button" onClick={this.addToCart}>
          Add To Cart
        </button> */}
      </div>
    );
  };
}

export default TeaDetails;
