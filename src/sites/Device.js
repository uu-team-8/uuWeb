import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./page.css";
import { LineGraph } from "../components/Graph/LineGraph";
import { Gauge } from "../components/Graph/Gauge";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="" style={{ height: "100%", weight: "100vw" }}>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center text-white">Device</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-5">
              <LineGraph />
              <Gauge />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Device;
