import React from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`value : ${payload[0].value}`}</p>
          <p className="desc">{`date: ${payload[0].payload.time}`}</p>
        </div>
      );
    }

    return null;
  };

  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="50%">
          <ComposedChart
            width={500}
            height={150}
            data={this.props.graph_data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <defs>
              <linearGradient id="humidity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#195896" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#195896" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="temperature" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c0ca82" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#c0ca82" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={this.CustomTooltip} />
            <Legend />
            <Area
              type="monotone"
              dataKey={this.props.name}
              connectNulls
              stroke={this.props.name === "temperature" ? "#c0ca82" : "#195896"}
              fill={"url(#" + this.props.name + ")"}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default LineGraph;
