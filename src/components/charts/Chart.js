import React, { useContext } from "react";
import { CousreContext } from "../../Root";
import "./Charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const getData = useContext(CousreContext);
  const data = getData.data;

  return (
    <div className="charts-container">
      <h1 className="my-5 bg-warning p-5 text-muted  rounded">
        Our Corse Statistics
      </h1>

      <div className="charts shadow-lg">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
