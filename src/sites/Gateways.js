import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Gateway from "../components/Gateway/Gateway";

class Gateways extends Component {
  render() {
    return (
      <>
        <div
          className="gradient-custom"
          style={{ height: "100vh", weight: "100vw" }}>
          <NavBar />
          <div className="container">
            <Gateway />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Gateways;
