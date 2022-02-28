import { Collapse } from "bootstrap";
import React, { Component } from "react";
import download from "downloadjs";
export default class VendingMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vend_details: {
        pageTitle: "Products",
        purchasedProduct: "",
        productCount: 0,
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
      },
      productName: [
        {
          id: 1,
          name: "Fizz",
          desc: "An effervescent fruity experience with hints of grape and coriander.",
          price: 1,
          amount: { amt_remain: 12, max_amount: 100 },
          pic: "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1276922850573292666/jpeg-600/G16.jpg",
        },
        {
          id: 2,
          name: "Pop",
          desc: "An explosion of flavor that will knock your socks off!",
          price: 1,
          amount: { amt_remain: 25, max_amount: 200 },
          pic: "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273408777629996108/jpeg-600/G13.jpg",
        },
        {
          id: 3,
          name: "Cola",
          desc: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
          price: 1,
          amount: { amt_remain: 25, max_amount: 100 },
          pic: "https://atlas-content1-cdn.pixelsquid.com/assets_v2/127/1273215019533735338/jpeg-600/G03.jpg",
        },
        {
          id: 4,
          name: "Mega Pop",
          desc: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
          price: 1,
          amount: { amt_remain: 25, max_amount: 50 },
          pic: "https://t3.ftcdn.net/jpg/00/66/97/22/360_F_66972273_DZ2iAaBiYdZ9pfwhiPmBRvjf7LmlYfKc.jpg",
        },
      ],
    };
  }
  render() {
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
                <p className="card-text float-end">
                  {this.state.vend_details.moneyInserted.toFixed(2)}
                </p>
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

  componentDidMount = async () => {
    console.log("componentDidMount");
    let response = await fetch("http://localhost:5001/", { method: "GET" });
    let prods = await response.json();
    //console.log(prods);
  };

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
    return this.state.productName.map((prod) => {
      return (
        <div className="card">
          <img src={prod.pic} className="card-img-top" alt="card-group-image" />
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
