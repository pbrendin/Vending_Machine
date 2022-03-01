import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import Admin from "./Admin";
//import MainContent from "./MainContent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    );
  }
}
