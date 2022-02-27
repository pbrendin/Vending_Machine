import { Collapse } from "bootstrap";
import React, { Component } from "react";

export default class VendingMachine extends Component {
  state = {
    pageTitle: "Products",
    productCount: 2,
    changeAmount: 0,
    moneyInserted: 0,
    numberOfDollars: 0,
    numberOfFiveDollars: 0,
    numberOfQuarters: 0,
    numberOfDimes: 0,
    numberOfNickles: 0,
    valueOfDollar: 1,
    valueOfFiveDollars: 5,
    valueOfQuarter: 0.25,
    valueOfDime: 0.1,
    valueOfNickel: 0.05,
    billFiveQuantity: 0,
    billOneQuantity: 0,
    coinQuarterQuantity: 0,
    coinDimeQuantity: 0,
    coinNickelQuantity: 0,
    productName: [
      {
        name: "Fizz",
        desc: "An effervescent fruity experience with hints of grape and coriander.",
        price: 1,
        amount: { amt_remain: 12, max_amount: 100 },
        photo:
          "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1276922850573292666/jpeg-600/G16.jpg",
      },
      {
        name: "Pop",
        desc: "An explosion of flavor that will knock your socks off!",
        price: 1,
        amount: { amt_remain: 25, max_amount: 200 },
        photo:
          "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273408777629996108/jpeg-600/G13.jpg",
      },
      {
        name: "Cola",
        desc: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
        price: 1,
        amount: { amt_remain: 25, max_amount: 100 },
        photo:
          "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273215019533735338/jpeg-600/G03.jpg",
      },
      {
        name: "Mega Pop",
        desc: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
        price: 1,
        amount: { amt_remain: 25, max_amount: 50 },
        photo:
          "https://t3.ftcdn.net/jpg/00/66/97/22/360_F_66972273_DZ2iAaBiYdZ9pfwhiPmBRvjf7LmlYfKc.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}</h4>
        <div className="card-group">{this.getProductRow()}</div>
        <div className="row row-cols-3 align-items-start">
          <div className="col-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/US_%245_Series_2006_obverse.jpg/1200px-US_%245_Series_2006_obverse.jpg"
              alt=""
              className="d-inline-block p-2 offset-1"
              width="125"
              height="100"
            />
          </div>
          <div className="col my-4 mx-2">
            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleIncrement(5)}
              >
                +
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleDecrement(5)}
              >
                -
              </button>
              <span className="badge bg-secondary small-badge mx-2">
                {this.state.billFiveQuantity}
              </span>
            </div>
          </div>
          <div className="col my-2 offset-md-1">
            <div className="card">
              <div className="card-header">Money Inserted</div>
              <div className="card-body">
                <h5 className="card-title">
                  You have Entered the following amount:
                </h5>
                <p className="card-text float-end">
                  {this.state.moneyInserted.toFixed(2)}
                </p>
              </div>
              <div className="card-footer">
                <span className="float-start">Change:</span>
                <span className="float-end">
                  {this.state.changeAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 align-items-start">
          <div className="col-2">
            <img
              src="https://www.rewardcharts4kids.com/wp-content/uploads/2015/04/play-money-1-dollar-500x205.jpg"
              className="d-inline-block p-2 offset-1"
              width="125"
              height="100"
              alt=""
            />
          </div>
          <div className="col my-auto mx-2">
            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleIncrement(1)}
              >
                +
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleDecrement(1)}
              >
                -
              </button>
              <span className="badge bg-secondary small-badge mx-2">
                {this.state.billOneQuantity}
              </span>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 align-items-start">
          <div className="col-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/2021-P_US_Quarter_Obverse.jpg"
              className="d-inline-block p-2 offset-1"
              width="75"
              height="75"
              alt=""
            />
          </div>
          <div className="col my-auto mx-2">
            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleIncrement(0.25)}
              >
                +
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleDecrement(0.25)}
              >
                -
              </button>
              <span className="badge bg-secondary small-badge mx-2">
                {this.state.coinQuarterQuantity}
              </span>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 align-items-start">
          <div className="col-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2017-D_Roosevelt_dime_obverse_transparent.png/1200px-2017-D_Roosevelt_dime_obverse_transparent.png"
              className="d-inline-block p-2 offset-1"
              width="50"
              height="50"
              alt=""
            />
          </div>
          <div className="col my-auto mx-2">
            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleIncrement(0.1)}
              >
                +
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleDecrement(0.1)}
              >
                -
              </button>
              <span className="badge bg-secondary small-badge mx-2">
                {this.state.coinDimeQuantity}
              </span>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 align-items-start">
          <div className="col-2">
            <img
              src="https://www.usmint.gov/wordpress/wp-content/uploads/2016/09/2004-westward-journey-nickel-series-uncirculated-obverse-768x768.jpg"
              className="d-inline-block p-2 offset-1"
              width="60"
              height="60"
              alt=""
            />
          </div>
          <div className="col my-auto mx-2">
            <div className="btn-group btn-group-sm">
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleIncrement(0.05)}
              >
                +
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => this.handleDecrement(0.05)}
              >
                -
              </button>
              <span className="badge bg-secondary small-badge mx-2">
                {this.state.coinNickelQuantity}
              </span>
            </div>
          </div>
        </div>
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
        <div className="card">
          <img
            src={prod.photo}
            className="card-img-top"
            alt="card-group-image"
          />
          <div className="card-body">
            <h5 className="card-title">
              {prod.name}
              <span className="card-title float-end">${prod.price}</span>
            </h5>
            <p className="card-text">{prod.desc}</p>
          </div>
          <div className="card-footer">
            <div>
              {/* <span className="d-inline badge bg-secondary small-badge"> */}
              <span
                className={this.checkProductAmountStatus(
                  prod.amount.amt_remain
                )}
              >
                {prod.amount.amt_remain}
              </span>
              <button
                type="button"
                className="d-inline btn btn-primary btn-sm float-end"
                onClick={() => this.buyProduct(prod)}
              >
                Buy Now
              </button>
            </div>
            <div>
              <span>
                <strong>Quantity</strong>
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  checkProductAmountStatus = (amount) => {
    if (amount < 5) return "d-inline badge bg-danger small-badge";
    else if (amount >= 5 && amount < 10)
      return "d-inline badge bg-warning small-badge";
    else return "d-inline badge bg-success small-badge";
  };

  handleIncrement = (currency) => {
    if (currency == 5 && this.state.moneyInserted < 10) {
      this.setState({ billFiveQuantity: this.state.billFiveQuantity + 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted + this.state.valueOfFiveDollars,
      });
    } else if (currency == 1 && this.state.moneyInserted < 10) {
      this.setState({ billOneQuantity: this.state.billOneQuantity + 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted + this.state.valueOfDollar,
      });
    } else if (currency == 0.25 && this.state.moneyInserted < 10) {
      this.setState({
        coinQuarterQuantity: this.state.coinQuarterQuantity + 1,
      });
      this.setState({
        moneyInserted: this.state.moneyInserted + this.state.valueOfQuarter,
      });
    } else if (currency == 0.1 && this.state.moneyInserted < 10) {
      this.setState({ coinDimeQuantity: this.state.coinDimeQuantity + 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted + this.state.valueOfDime,
      });
    } else if (currency == 0.05 && this.state.moneyInserted < 10) {
      this.setState({ coinNickelQuantity: this.state.coinNickelQuantity + 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted + this.state.valueOfNickel,
      });
    }
  };

  handleDecrement = (currency) => {
    if (currency == 5 && this.state.billFiveQuantity > 0) {
      this.setState({ billFiveQuantity: this.state.billFiveQuantity - 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted - this.state.valueOfFiveDollars,
      });
    } else if (currency == 1 && this.state.billOneQuantity > 0) {
      this.setState({ billOneQuantity: this.state.billOneQuantity - 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted - this.state.valueOfDollar,
      });
    } else if (currency == 0.25 && this.state.coinQuarterQuantity > 0) {
      this.setState({
        coinQuarterQuantity: this.state.coinQuarterQuantity - 1,
      });
      this.setState({
        moneyInserted: this.state.moneyInserted - this.state.valueOfQuarter,
      });
    } else if (currency == 0.1 && this.state.coinDimeQuantity > 0) {
      this.setState({ coinDimeQuantity: this.state.coinDimeQuantity - 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted - this.state.valueOfDime,
      });
    } else if (currency == 0.05 && this.state.coinNickelQuantity > 0) {
      this.setState({ coinNickelQuantity: this.state.coinNickelQuantity - 1 });
      this.setState({
        moneyInserted: this.state.moneyInserted - this.state.valueOfNickel,
      });
    }
  };

  buyProduct = (prod) => {
    if (this.state.moneyInserted >= prod.price && prod.amount.amt_remain > 0) {
      //console.log("buyProduct has been called");
      let allProducts = [...this.state.productName];
      let index = allProducts.indexOf(prod);

      allProducts[index].amount.amt_remain--;

      this.setState({ moneyInserted: this.state.moneyInserted - 1 });
      this.setState({ productName: allProducts });
    }
  };
}
