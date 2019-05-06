import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Search from "./search.jsx";

let renderRe = routerData => {
  let reviewId = routerData.match.params.rid;
  let candidatesRe = reviewers.filter(reviewer => {
    return reviewId === reviewer.id;
  });
  return <Reviewer reviewer={candidatesRe[0]} />;
};

class unconnectedTea extends Component {
  constructor() {
    super();
  }

  renderItem = () => {
    return (
      <div>
        <Item />
      </div>
    );
  };

  render = () => {
    console.log("Teas:");
    return (
      <div>
        <Search />
        <ul>
          {this.props.teas.map(tea => {
            return (
              <div>
                <h3>{tea.name}</h3>
                <p>{tea.price}</p>
                <p>{tea.desc}</p>
                <p>
                  <Link>{tea.seller}</Link>
                </p>
                <p>{tea.reviews}</p>
              </div>
            );
          })}
        </ul>
        <div />
      </div>
    );
  };
}

let mapStateToProp = st => {
  return {
    teas: st.teas
  };
};

let Tea = connect(mapStateToProp)(unconnectedTea);
export default Tea;
