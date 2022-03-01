import { Collapse } from "bootstrap";
import React, { Component } from "react";
import download from "downloadjs";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vend_details: {},
      products: [],
    };
  }
  componentDidMount = async () => {
    console.log("componentDidMount");
    let response = await fetch("http://localhost:5001/getDetails", {
      method: "GET",
    });
    let prods = await response.json();
    console.log(prods);

    this.setState({ vend_details: prods });

    response = await fetch("http://localhost:5001/getProducts", {
      method: "GET",
    });
    prods = await response.json();
    console.log(prods);

    this.setState({ products: prods });
  };

  render() {
    const { products, vend_details } = this.state;
    if (Object.keys(vend_details).length === 0) return null;
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.vend_details.pageTitle}
        </h4>
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
                {this.state.vend_details.billFiveQuantity}
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
                <p className="card-text float-end">{}</p>
              </div>
              <div className="card-footer">
                <span className="float-start">
                  {this.state.vend_details.purchasedProduct}
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
                {this.state.vend_details.billOneQuantity}
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
                {this.state.vend_details.coinQuarterQuantity}
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
                {this.state.vend_details.coinDimeQuantity}
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
                {this.state.vend_details.coinNickelQuantity}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "ComponentDidUpdate - Vending Machine",
      prevProps,
      prevState,
      this.props,
      this.state
    );
    // if(prevProps.x != this.props.x){
    //   //Make HTTP CALL
    // }
  }

  componentWillUnmount() {
    //onsole.log("componentWillUnmount - Vending Machine");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch - Vending Machine");
    console.log(error, info);

    localStorage.lastError = `${JSON.stringify(error)}\n${JSON.stringify(
      info
    )}`;
  }

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
    if (this.state.vend_details.productCount > 0)
      return this.state.vend_details.productName.map((prod) => {
        return (
          <div className="card">
            <img
              src={prod.pic}
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
    let v_detail = { ...this.state.vend_details };
    if (
      currency === 5 &&
      v_detail.moneyInserted < 10 &&
      v_detail.moneyInserted + v_detail.valueOfFiveDollars <= 10
    ) {
      v_detail.billFiveQuantity++;
      v_detail.moneyInserted += v_detail.valueOfFiveDollars;
      console.log("5 was added");
    } else if (
      currency === 1 &&
      v_detail.moneyInserted < 10 &&
      v_detail.moneyInserted + v_detail.valueOfDollar <= 10
    ) {
      v_detail.billOneQuantity++;
      v_detail.moneyInserted += v_detail.valueOfDollar;
    } else if (
      currency === 0.25 &&
      v_detail.moneyInserted < 10 &&
      v_detail.moneyInserted + v_detail.valueOfQuarter <= 10
    ) {
      v_detail.coinQuarterQuantity++;
      v_detail.moneyInserted += v_detail.valueOfQuarter;
    } else if (currency === 0.1 && v_detail.moneyInserted <= 10) {
      v_detail.coinDimeQuantity++;
      v_detail.moneyInserted += v_detail.valueOfDime;
    } else if (currency === 0.05 && v_detail.moneyInserted <= 10) {
      v_detail.coinNickelQuantity++;
      v_detail.moneyInserted += v_detail.valueOfNickel;
    }

    this.setState({ vend_details: v_detail });
  };

  handleDecrement = (currency) => {
    let v_detail = { ...this.state.vend_details };

    if (
      currency === 5 &&
      v_detail.billFiveQuantity > 0 &&
      v_detail.moneyInserted - v_detail.valueOfFiveDollars >= 0
    ) {
      v_detail.billFiveQuantity--;
      v_detail.moneyInserted -= v_detail.valueOfFiveDollars;
    } else if (
      currency === 1 &&
      v_detail.billOneQuantity > 0 &&
      v_detail.moneyInserted - v_detail.valueOfDollar >= 0
    ) {
      v_detail.billOneQuantity--;
      v_detail.moneyInserted -= v_detail.valueOfDollar;
    } else if (
      currency === 0.25 &&
      v_detail.coinQuarterQuantity > 0 &&
      v_detail.moneyInserted - v_detail.valueOfQuarter >= 0
    ) {
      v_detail.coinQuarterQuantity--;
      v_detail.moneyInserted -= v_detail.valueOfQuarter;
    } else if (
      currency === 0.1 &&
      v_detail.coinDimeQuantity > 0 &&
      v_detail.moneyInserted - v_detail.valueOfDime >= 0
    ) {
      v_detail.coinDimeQuantity--;
      v_detail.moneyInserted -= v_detail.valueOfDime;
    } else if (
      currency === 0.05 &&
      v_detail.coinNickelQuantity > 0 &&
      v_detail.moneyInserted - v_detail.valueOfNickel >= 0
    ) {
      v_detail.coinNickelQuantity--;
      v_detail.moneyInserted -= v_detail.valueOfNickel;
    }
    this.setState({ vend_details: v_detail });
  };

  buyProduct = async (prod) => {
    //console.log("entered buyProduct");
    if (
      this.state.vend_details.moneyInserted >= prod.price &&
      prod.amount.amt_remain > 0
    ) {
      console.log("buyProduct has been called");
      let res = await fetch(`http://localhost:5001/products/${prod.name}`, {
        method: "GET",
      });

      let blob = await res.blob();
      download(blob, prod.name + ".json");

      let v_detail = { ...this.state.vend_details };
      let allProducts = [...this.state.productName];
      let index = allProducts.indexOf(prod);

      allProducts[index].amount.amt_remain--;
      v_detail.purchasedProduct =
        "You have purchased " + allProducts[index].name;
      v_detail.moneyInserted--;
      v_detail.billFiveQuantity = 0;
      v_detail.billOneQuantity = 0;
      v_detail.coinDimeQuantity = 0;
      v_detail.coinQuarterQuantity = 0;
      v_detail.coinNickelQuantity = 0;

      this.setState({ vend_details: v_detail });
      this.setState({ productName: allProducts });
    } else if (this.state.vend_details.moneyInserted < prod.price) {
      this.state.vend_details.purchasedProduct = "Please insert $" + prod.price;
      console.log(this.state.vend_details.purchasedProduct);
      this.setState({
        purchasedProduct: this.state.vend_details.purchasedProduct,
      });
    }
  };
}
