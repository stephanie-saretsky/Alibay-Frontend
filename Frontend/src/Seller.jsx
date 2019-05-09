import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Review from "./Review.jsx";

class Seller extends Component {
  renderRating = props => {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars = stars.concat("★");
    }
    for (let j = 0; j < 5 - props.rating; j++) {
      stars = stars.concat("✩");
    }
    return stars;
  };

  renderRatingTwo = x => {
    let stars = [];
    for (let i = 0; i < x; i++) {
      stars = stars.concat("★");
    }
    for (let j = 0; j < 5 - x; j++) {
      stars = stars.concat("✩");
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
      <div className="seller">
        <h2>{this.props.seller.username + " "}</h2>
        <p>
          <span>{this.renderRatingTwo(this.renderAverage())}</span>
        </p>
        <br />
        <hr />
        <h3>Reviews: </h3>
        <Link
          to={{
            pathname: "/add-review-seller",
            state: {
              sellerId: this.props.seller.id,
              name: this.props.seller.username
            }
          }}
          className="nav-button"
        >
          Add a review
        </Link>
        <br />
        <ul>
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
        <hr />
        <h3>On sale:</h3>
        <br />
        <h4>Teas</h4>
        <ul>
          {this.props.tea.map(tea => (
            <div>
              <p>
                <Link to={"/tea/" + tea._id}>
                  <strong>{tea.name}</strong>
                </Link>
                : {tea.description}
              </p>
              <br />
            </div>
          ))}
        </ul>
        <br />
        <h4>Coffees</h4>
        <ul>
          {this.props.coffee.map(coffee => (
            <div>
              <p>
                <Link to={"/coffee/" + coffee._id}>
                  <strong>{coffee.name}</strong>
                </Link>
                : {coffee.description}
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
