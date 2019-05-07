import React, { Component } from "react";
import main from "./main.css";
let path = "http://localhost:4000/";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount = () => {
    console.log("cart rendering");
    fetch(path + "cart", {
      method: "GET",
      credentials: "include"
    })
      .then(x => {
        return x.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          this.setState({ items: body.items });
        }
      });
  };

  render = () => {
    return (
      <div>
        <ul>
          {this.state.items.map(item => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.price + "$"}</p>
                <p>
                  <Stripe />
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default Cart;
