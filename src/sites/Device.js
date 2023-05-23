import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { AuthContext } from "../context/AuthProvider";

import "./page.css";
import { default as LineGraph } from "../components/Graph/LineGraph";
import { Gauge } from "../components/Graph/Gauge";

class Device extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("data");
    console.log("token", this.context.token);
    const token = localStorage.getItem("token");
    const query = {
      gtw_id: "646b2403169063fc98015f09",
      start: "-4h",
    };
    fetch("https://api.uu.vojtechpetrasek.com/v4/gateway/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((data) => {
        var graph_data = [];
        data.forEach((element) => {
          if (element._field === "temperature") {
            graph_data.push({
              name: element._time,
              [element._field]: element._value,
            });
          }
        });
        console.log("data");
        console.log(graph_data);

        this.setState({
          data: graph_data,
        });
        console.log("end of fetch");
      });
  };

  debugdata = () => {
    console.log("debug");
    console.log(this.state.data);
  };

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
              <button className="btn btn-primary" onClick={this.getData}>
                Refresh
              </button>
              <button className="btn btn-primary" onClick={this.debugdata}>
                debug
              </button>
              {this.state.data && (
                <LineGraph graph_data={this.state.data} name="temperature" />
              )}
              {/*<LineGraph data={this.state.temp} time={this.state.time} />*/}
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
