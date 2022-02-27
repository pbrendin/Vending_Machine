import { Collapse } from "bootstrap";
import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Products",
    productCount: 2,
    productName: [
      {
        name: "Cola",
        desc: "coke",
        price: 1,
        amount: { amt_remain: 8, quantity: 0, max_amount: 200 },
        photo:
          "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273215019533735338/jpeg-600/G03.jpg",
      },
      {
        name: "Pepsi",
        desc: "not coke",
        price: 1,
        amount: { amt_remain: 25, quantity: 0, max_amount: 200 },
        photo:
          "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273408777629996108/jpeg-600/G13.jpg",
      },
      {
        name: "Dew",
        desc: "yummy",
        price: 1,
        amount: { amt_remain: 25, quantity: 0, max_amount: 100 },
        photo:
          "https://t3.ftcdn.net/jpg/00/66/97/22/360_F_66972273_DZ2iAaBiYdZ9pfwhiPmBRvjf7LmlYfKc.jpg",
      },
      {
        name: "Sprite",
        desc: "clear",
        price: 1,
        amount: { amt_remain: 25, quantity: 0, max_amount: 50 },
        photo:
          "https://t3.ftcdn.net/jpg/00/66/97/22/360_F_66972273_DZ2iAaBiYdZ9pfwhiPmBRvjf7LmlYfKc.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.productCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Remaining</th>
              <th>Max Amount</th>
            </tr>
          </thead>
          <tbody>
            {/*this.state.productName.map((prod) => {
              return (
                <tr key={prod.name}>
                  <td>{prod.name}</td>
                  { <td>{prod.desc}</td> }
                  <td>{this.getDescription(prod.desc)}</td>
                  <td>{prod.price}</td>
                  <td>{prod.amount.amt_remain}</td>
                  <td>{prod.amount.max_amount}</td>
                </tr>
              );
            })*/}
            {this.getProductRow()}
          </tbody>
        </table>
      </div>
    );
  }

  //Executes when a user clicks the button
  // this can be used for adding to cart
  onRefreshClick = () => {
    this.setState({ productCount: 7 });
    //console.log("Refresh Clicked");
  };

  getDescription = (desc) => {
    return desc ? (
      desc
    ) : (
      <div className="alert alert-danger" role="alert">
        <strong>Description must be provided</strong>
      </div>
    );
  };

  getProductRow = () => {
    return this.state.productName.map((prod) => {
      return (
        <tr key={prod.name}>
          <td>
            <img src={prod.photo} alt="item" width="50" height="50" />
            <div>
              <button className="btn btn-sm btn-outline-secondary">
                Add to Cart
              </button>
            </div>
            <div className="float-right">
              <span className="badge bg-secondary m-1">{prod.quantity}</span>
              <div className="btn-group">
                <button className="btn btn-outline-success btn-sm">+</button>
                <button className="btn btn-outline-success btn-sm">-</button>
              </div>
            </div>
          </td>
          <td>{prod.name}</td>
          {/* <td>{prod.desc}</td> */}
          <td>{this.getDescription(prod.desc)}</td>
          <td>{prod.price}</td>
          <td className={this.checkProductAmountStatus(prod.amount.amt_remain)}>
            {prod.amount.amt_remain}
          </td>
          <td>{prod.amount.max_amount}</td>
        </tr>
      );
    });
  };

  checkProductAmountStatus = (amount) => {
    if (amount < 5) return "red-highlight";
    else if (amount >= 5 && amount < 10) return "yellow-highlight";
    else return "green-highlight";
  };
}
