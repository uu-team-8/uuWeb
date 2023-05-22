import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["test"],
        datasets: [
          {
            fill: true,
            label: this.props.name,
            data: [1],
            borderColor: "#2a9d8f",
            backgroundColor: "#e9c46a",
          },
        ],
      },
    };
  }
  options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: this.props.name,
      },
    },
  };

  componentDidMount() {
    console.log("line mount");
    this.refreshdata();
  }

  refreshdata = () => {
    console.log("line refresh");
    this.setState({
      data: {
        labels: this.props.graph_data.labels,
        datasets: [
          {
            fill: true,
            label: this.props.name,
            data: this.props.graph_data.datasets,
            borderColor: "#2a9d8f",
            backgroundColor: "#e9c46a",
          },
        ],
      },
    });
  };

  debugdata = () => {
    console.log("debug");
    console.log(this.props.graph_data.labels);
    console.log(this.props.graph_data.datasets);
    console.log(this.state);
  };

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.debugdata}>
          debug
        </button>
        <button className="btn btn-primary" onClick={this.refreshdata}>
          refresh
        </button>
        {this.props.name && this.props.graph_data && (
          <>
            {console.log("line render", this.props.name, this.props)}
            <Line options={this.options} data={this.state.data} />
          </>
        )}
      </>
    );
  }
}

export default LineGraph;
