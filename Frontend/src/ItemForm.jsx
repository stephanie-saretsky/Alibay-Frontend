import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";

let renderRe = routerData => {
  let reviewId = routerData.match.params.rid;
  let candidatesRe = reviewers.filter(reviewer => {
    return reviewId === reviewer.id;
  });
  return <Reviewer reviewer={candidatesRe[0]} />;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: initialItems,
      sellers: initialSellers
    };
  }

  renderItem = routerData => {
    console.log("in render item");
    let itemId = routerData.match.params.iid;

    console.log("items in array: ", this.state.items);
    let candidatesItem = this.state.items.filter(item => {
      console.log("item: ", item);
      return item.id === itemId;
    });
    let reviewCandidates = reviews.filter(review => {
      return review.id === itemId;
    });

    console.log("review: ", reviewCandidates);
    return <Details item={candidatesItem[0]} reviews={reviewCandidates} />;
  };

  renderList = () => {
    return (
      <div>
        {this.state.sellers.map(seller => (
          <List name={seller.name} id={seller.id} rating={seller.rating} />
        ))}
      </div>
    );
  };

  renderSeller = routerData => {
    let sellerId = routerData.match.params.sid;
    let candidates = this.state.sellers.filter(seller => {
      return seller.id === sellerId;
    });
    return <Seller seller={candidates[0]} items={this.state.items} />;
  };

  renderAllItem = () => {
    return (
      <div>
        {this.state.items.map(item => (
          <Item
            cost={item.price}
            sellerId={item.sellerId}
            imageLocation={item.image}
            description={item.description}
            id={item.id}
            name={item.name}
          />
        ))}
      </div>
    );
  };

  renderAdd = () => {
    return (
      <div>
        <AddItem
          add={item => this.setState({ items: this.state.items.concat(item) })}
        />
      </div>
    );
  };

  render = () => {
    console.log("Sellers:", initialSellers);
    return (
      <BrowserRouter>
        <div>
          <div className="flex">
            <div>
              <Link className="buttonTwo a" to={"/List/"}>
                View all sellers
              </Link>
            </div>
            <div>
              <Link className="buttonTwo a" to={"/AddItem/"}>
                Add an item
              </Link>
            </div>

            <div>
              <Link className="buttonTwo a" to={"/"}>
                View Items
              </Link>
            </div>
          </div>
          <div className="espace">
            <Route exact={true} path="/" render={this.renderAllItem} />
            <Route
              exact={true}
              path="/seller/:sid"
              render={this.renderSeller}
            />
            <Route exact={true} path="/item/:iid" render={this.renderItem} />
            <Route exact={true} path="/reviewer/:rid" render={renderRe} />
            <Route exact={true} path="/List/" render={this.renderList} />
            <Route exact={true} path="/AddItem/" render={this.renderAdd} />
            <Route
              exact={true}
              path="/AddSeller/"
              render={this.renderAddSeller}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
