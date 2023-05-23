import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { AuthContext } from "../context/AuthProvider";

import "./page.css";
import { default as LineGraph } from "../components/Graph/LineGraph";

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
      gtw_id: this.props.id,
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
          if (
            element._field === "temperature" ||
            element._field === "concentration"
          ) {
            var time = new Date(element._time);
            var hours = time.getHours();
            var minutes = String(time.getMinutes()).padStart(2, "0");
            var seconds = String(time.getSeconds()).padStart(2, "0");
            graph_data.push({
              name: hours + ":" + minutes + ":" + seconds,
              [element._field]: element._value,
              time: element._time,
            });
          }
        });
        console.log("data");
        console.log(graph_data);

        graph_data.sort((a, b) => {
          var a_time = new Date(a.time);
          var b_time = new Date(b.time);
          console.log(a_time);
          console.log(b_time);
          if (a_time < b_time) {
            return -1;
          }
          if (a_time > b_time) {
            return 1;
          }
          return 0;
        });

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
            <div className="col-12 p-5" style={{ height: "600px" }}>
              <h3> Temperature </h3>

              {this.state.data && (
                <>
                  <LineGraph graph_data={this.state.data} name="temperature" />
                  <LineGraph
                    graph_data={this.state.data}
                    name="concentration"
                  />
                </>
              )}
              {/*<LineGraph data={this.state.temp} time={this.state.time} />*/}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Device;
