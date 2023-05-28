import React, { Component } from "react";

import NavBar from "../components/Navbar/Navbar";
import DateTime from "../components/DateTime/DateTime";

import { AuthContext } from "../context/AuthProvider";

import "./page.css";
import { default as LineGraph } from "../components/Graph/LineGraph";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

class Device extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      agregation_time: "10m",
      window_time: "1h",
      date_range: { startDate: "", endDate: "" },
      isDateSelected: false,
      availability: 0,
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

  date_time_change = (newValue) => {
      const now = Date.now();
      const date_start = Math.floor((new Date(newValue[0]) - now)/1000/60/60/24)+1;
      const date_end = Math.floor((new Date(newValue[1]) - now)/1000/60/60/24)+1;
      const range = date_end - date_start;
      const startDate = date_start + "d";
      const endDate = date_end + "d";
      console.log(startDate)
      console.log(endDate)
      console.log("RANGE:", range)
      this.setState({ date_range: { start: startDate, end: endDate }, isDateSelected: true, availability: range}, () => this.getData());
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
    console.log("date_range", this.state.agregation_time);
    const token = localStorage.getItem("token");
    const query = {
      gtw_id: this.props.id,
      start: this.state.date_range.startDate,
      stop: this.state.date_range.endDate,
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
    const { isDateSelected, availability } = this.state;

    let granularityOptions = [
      { value: "1m", label: "1 minute", days: [1]},
      { value: "5m", label: "5 minutes", days: [1]},
      { value: "10m", label: "10 minutes", days: [1,2] },
      { value: "15m", label: "15 minutes", days: [1,2,3] },
      { value: "30m", label: "30 minutes", days: [1,2,3,4,5] },

      { value: "1h", label: "1 hour", days: [1,2,3,4,5,6,7,8,9,10] },
      { value: "2h", label: "2 hours", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] },
      { value: "3h", label: "3 hours", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] },
      { value: "6h", label: "6 hours", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
      { value: "12h", label: "12 hours", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] },
      { value: "1d", label: "1 day", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32] },

      { value: "7d", label: "7 days", days: [32] },
      { value: "30d", label: "30 days", days: [32,33] },
    ];

    if(availability<32){
      granularityOptions = granularityOptions.filter(
          (option) => option.days.includes(availability)
      );
    } else if(availability>=32){
        granularityOptions = granularityOptions.filter(
            (option) => option.days.includes(32)
        );
    } else if(availability>=365){
        granularityOptions = granularityOptions.filter(
            (option) => option.days.includes(33)
        );
    }

    // if(availability < 7) {
    //     granularityOptions = granularityOptions.filter(
    //         (option) => option.days === 1
    //     );
    // } else if(availability <= 7) {
    //     granularityOptions = granularityOptions.filter(
    //         (option) => option.days === 7
    //     );
    // } else if(availability <= 8) {
    //     granularityOptions = granularityOptions.filter(
    //         (option) => option.days === 8
    //     );
    // } else if(availability > 8) {
    //     granularityOptions = granularityOptions.filter(
    //         (option) => option.days === 30
    //     );
    // }

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
              <div className="input-group">
                <div className="col-6" style={{padding: "0 10px"}}>
                    <DateTime onChange={this.date_time_change} />
                </div>
                <div className="col-6" style={{padding: "8px 10px"}}>
                    <FormControl fullWidth>
                        <InputLabel id="granularity">Granularity</InputLabel>
                        <Select
                            labelId="granularity"
                            id="demo-simple-select"
                            label="Granularity"
                            onChange={this.agregation_time_change}
                            defaultValue="10m"
                            disabled={!isDateSelected}
                        >
                            {granularityOptions.map((option) =>(
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                  <button
                      type="button"
                      style={{width:"100%", margin:"10px", borderRadius:"5px"}}
                      className="btn btn-outline-secondary"
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
      </div>
    );
  }
}

export default Device;
