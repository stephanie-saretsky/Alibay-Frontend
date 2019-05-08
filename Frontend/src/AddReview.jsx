import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
let path = "http://localhost:4000/";

class UnconnectedAddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ""
    };
  }

  handleChangeDesc = event => {
    console.log("Desc", event.target.value);
    this.setState({ desc: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Add a revew to an item form submitted");
    let data = new FormData();
    data.append("desc", this.state.desc);
    data.append("ItemId", this.props.itemId);
    fetch(path + "add-review-item", {
      method: "POST",
      body: data,
      credentials: "include"
    })
      .then(x => {
        console.log("text", x);
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        console.log("parsed body", body);
        if (body.success) {
          alert("Review Added");
          this.setState({ desc: "" });
          return;
        }
        alert("Please, make sure you wrote everything");
        return;
      });
  };

  render = () => {
    console.log("Props =>", this.props);
    return (
      <div className="form-box">
        <h2> Add a review to {this.props.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Comment: </p>
          <textarea
            rows="4"
            cols="50"
            name="textarea"
            value={this.state.desc}
            onChange={this.handleChangeDesc}
            required
          />
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  };
}

let AddReview = connect()(UnconnectedAddReview);
export default AddReview;
