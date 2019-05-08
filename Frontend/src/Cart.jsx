import React, { Component } from "react";
import main from "./main.css";
let path = "http://localhost:4000/";
let stripe = Stripe("pk_test_o0jp2CyctV96lKqFAIdFE4i0008Y2G9odT");

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

  checkoutHandler = () => {
    fetch(path + "purchase", {
      credentials: "include"
    })
      .then(responseHeader => {
        return responseHeader.text();
      })
      .then(responseBody => {
        let parsed = JSON.parse(responseBody);
        if (parsed.success) {
          stripe
            .redirectToCheckout({
              sessionId: parsed.sessionId
            })
            .then(result => {
              fetch(path + "clear-cart", {
                credentials: "include"
              });
            });
        }
      });
  };

  removeItem = id => {
    console.log(id);
    let data = new FormData();
    data.append("itemId", id);
    fetch(path + "remove-item", {
      method: "POST",
      credentials: "include",
      body: data
    });
    // .then(header => {
    //   return header.text();
    // })
    // .then(body => {
    //   let parsed = JSON.parse(body);
    //   if (parsed.success) {
    //     fetch(path + "cart", {
    //       method: "GET",
    //       credentials: "include"
    //     })
    //       .then(x => {
    //         return x.text();
    //       })
    //       .then(responseBody => {
    //         let body = JSON.parse(responseBody);
    //         if (body.success) {
    //           this.setState({ items: body.items });
    //         }
    //       });
    //   }
    // });
  };

  render = () => {
    let optionalEmpty = "";
    if (this.state.items.length === 0) {
      optionalEmpty = <div>You have no items in your shopping cart</div>;
    }
    return (
      <div>
        {optionalEmpty}
        <ul>
          {this.state.items.map(item => {
            return (
              <li>
                <img src={item.image} height="50px" />
                <h3>{item.name}</h3>
                <p>{"$" + item.price + ".00"}</p>
                <button
                  onClick={() => {
                    this.removeItem(item._id);
                  }}
                >
                  Remove from Cart
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={this.checkoutHandler}>Checkout</button>
      </div>
    );
  };
}

export default Cart;
