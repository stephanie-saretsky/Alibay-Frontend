import React, { Component } from "react";
import "./css/main.css";
import "./css/seller.css";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";

class Seller extends Component {
  renderRating = props => {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars = stars.concat(<img src="/leaf.png" />);
    }
    for (let j = 0; j < 5 - props.rating; j++) {
      stars = stars.concat(<img src="/leaf black.png" />);
    }
    return stars;
  };

  renderRatingTwo = x => {
    let stars = [];
    for (let i = 0; i < x; i++) {
      stars = stars.concat(<img src="/leaf.png" />);
    }
    for (let j = 0; j < 5 - x; j++) {
      stars = stars.concat(<img src="/leaf black.png" />);
    }
    return stars;
  };

  renderAverage = () => {
    let reviews = this.props.reviews;
    let total = 0;
    let div = reviews.length;
    let average = 0;
    reviews.map(elem => {
      let number = Number(elem.rating);
      total += number;
    });
    average = Math.round(total / div);
    console.log("average=>", average);
    return average;
  };

  render() {
    console.log("PROPS=>", this.props);
    return (
      <div>
        <div className="seller-card">
          <h2>{this.props.seller.username + " "}</h2>
          <p className="border-seller">
            <span>{this.renderRatingTwo(this.renderAverage())}</span>
          </p>
          {/* line under seller SCOTT */}
          <h3>Currently on sale by this seller:</h3>
          <h4 className="sell-title">Teas</h4>
          <ul>
            {this.props.tea.map(tea => (
              <div>
                <p>
                  <Link className="link" to={"/tea/" + tea._id}>
                    <strong>{tea.name}</strong>
                  </Link>
                  : {tea.description}
                </p>
                <br />
              </div>
            ))}
          </ul>
          <h4 className="sell-title">Coffees</h4>
          <ul>
            {this.props.coffee.map(coffee => (
              <div>
                <p>
                  <Link className="link" to={"/coffee/" + coffee._id}>
                    <strong>{coffee.name}</strong>
                  </Link>
                  : {coffee.description}
                </p>
                <br />
              </div>
            ))}
          </ul>
        </div>
        <div className="reviews">
          <h3 className="review-title">Seller Reviews: </h3>
          <ul className="rating">
            {this.props.reviews.map(rev => (
              <div>
                <p>
                  <span>{this.renderRating(rev)}</span>
                  <br />
                  <strong>{rev.reviewer.name}</strong>: {rev.review}
                </p>
                <br />
              </div>
            ))}
          </ul>
          <Link
            to={{
              pathname: "/add-review-seller",
              state: {
                sellerId: this.props.seller.id,
                name: this.props.seller.username
              }
            }}
            className="button"
          >
            <b>Add a review</b>
          </Link>
        </div>
      </div>
    );
  }
}

export default Seller;
