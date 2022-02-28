import React, { Component } from "react";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
//import MainContent from "./MainContent";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <VendingMachine />
        {/* <MainContent /> */}
      </React.Fragment>
    );
  }
}
