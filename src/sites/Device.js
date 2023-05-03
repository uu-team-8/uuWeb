import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./page.css";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="gradient-custom"
        style={{ height: "100vh", weight: "100vw" }}>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default Device;
