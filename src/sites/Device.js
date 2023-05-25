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
      agregation_time: "10m",
      window_time: "1h",
    };
  }

  componentDidMount() {
    this.getData();
  }

  agregation_time_change = (e) => {
    this.setState({ agregation_time: e.target.value }, () => this.getData());
    console.log(this.state.agregation_time);
    console.log(e.target.value);
  };

  window_time_change = (e) => {
    this.setState({ window_time: e.target.value }, () => this.getData());
    console.log(this.state.window_time);
    console.log(e.target.value);
  };

  refresh = () => {
    this.getData();
  };

  getData = () => {
    console.log("data");
    console.log("token", this.context.token);
    console.log("agregation_time", this.state.agregation_time);
    const token = localStorage.getItem("token");
    const query = {
      gtw_id: this.props.id,
      start: "-" + this.state.window_time,
      agregation_time: this.state.agregation_time,
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
            element._field === "humidity"
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
              <div class="input-group">
                <snap
                  type="text"
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                  placeholder="TODO">
                  TODO
                </snap>

                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">
                    Last:
                  </span>
                </div>
                <select
                  style={{ maxWidth: "10%" }}
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={this.window_time_change}>
                  <option value="5m">5 min</option>
                  <option value="10m">10 min</option>
                  <option value="15m">15 min</option>
                  <option value="30m">30 min</option>
                  <option value selected="1h">
                    1 hour
                  </option>
                  <option value="2h">2 hours</option>
                  <option value="3h">3 hours</option>
                  <option value="6h">6 hours</option>
                  <option value="12h">12 hours</option>
                  <option value="1d">1 day</option>
                  <option value="2d">2 days</option>
                  <option value="7d">7 days</option>
                  <option value="14d">14 days</option>
                  <option value="30d">30 days</option>
                </select>
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">
                    Agregation:
                  </span>
                </div>
                <select
                  style={{ maxWidth: "10%" }}
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={this.agregation_time_change}>
                  <option value="5m">1 min</option>
                  <option value="5m">5 min</option>
                  <option value="10m">10 min</option>
                  <option value="15m">15 min</option>
                  <option value="30m">30 min</option>
                  <option value selected="1h">
                    1 hour
                  </option>
                  <option value="2h">2 hours</option>
                  <option value="3h">3 hours</option>
                  <option value="6h">6 hours</option>
                  <option value="12h">12 hours</option>
                  <option value="1d">1 day</option>
                  <option value="2d">2 days</option>
                  <option value="7d">7 days</option>
                  <option value="14d">14 days</option>
                  <option value="30d">30 days</option>
                </select>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={this.refresh}>
                  Refresh
                </button>
              </div>
              <h3> Temperature </h3>
              {this.state.data && (
                <LineGraph graph_data={this.state.data} name="temperature" />
              )}
              <h3> Humidity</h3>
              {this.state.data && (
                <LineGraph graph_data={this.state.data} name="humidity" />
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
