import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
let path = "http://localhost:4000/";

class UnconnectedAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "tea",
      desc: "",
      name: "",
      price: "",
      quantity: "",
      file: undefined
    };
  }

  handleFile = event => {
    console.log("User put an image", event.target.files);
    this.setState({ file: event.target.files[0] });
  };

  handleChangeName = event => {
    console.log("Name", event.target.value);
    this.setState({ name: event.target.value });
  };

  handleChangeDesc = event => {
    console.log("Desc", event.target.value);
    this.setState({ desc: event.target.value });
  };

  handleChangeQuantity = event => {
    console.log("Quantity", event.target.value);
    this.setState({ quantity: event.target.value });
  };

  handleChangePrice = event => {
    console.log("Price", event.target.value);
    this.setState({ price: event.target.value });
  };

  handleChange = event => {
    console.log("Type", event.target.value);
    this.setState({ type: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Add an item form submitted");
    let data = new FormData();
    let type = "add-item-tea";
    if (this.state.type === "coffee") {
      type = "add-item-coffee";
    }
    data.append("name", this.state.name);
    data.append("price", this.state.price);
    data.append("quantity", this.state.quantity);
    data.append("desc", this.state.desc);
    data.append("file", this.state.file);
    fetch(path + type, {
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
          swal({
            title: "Success!",
            text: "You've added an item to our marketplace!",
            icon: "success",
            button: "Return"
          });
          return;
        }
        swal({
          title: "Oops!",
          text: "You forgot to fill out a form field!",
          icon: "error",
          button: "Fix It"
        });
        return;
      });
  };

  render = () => {
    console.log("TYPE=>", this.props.type);
    return (
      <div className="form-card">
        <h2>
          <u>Add {this.state.type}</u>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <select name="Choice" onChange={this.handleChange}>
            <option value="tea">Tea</option>
            <option value="coffee">Coffee</option>
          </select>
          <p>Name of the Item: </p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            required
          />
          <p>Price: </p>
          <input
            type="number"
            min="0"
            max="100000000"
            name="price"
            onChange={this.handleChangePrice}
            required
          />
          <p>Description: </p>
          <textarea
            rows="4"
            cols="50"
            name="textarea"
            value={this.state.desc}
            onChange={this.handleChangeDesc}
            required
          />
          <p>Image</p>
          <input type="file" onChange={this.handleFile} required />
          <p>Quantity:</p>
          <input
            type="number"
            min="0"
            max="100000000"
            name="quantity"
            onChange={this.handleChangeQuantity}
            required
          />
          <p />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  };
}

let mapStateToProps = st => {
  console.log("State=>", st);
  return { type: st.category };
};

let AddItem = connect(mapStateToProps)(UnconnectedAddItem);
export default AddItem;
