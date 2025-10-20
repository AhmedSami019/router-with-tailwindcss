import React, { useEffect, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const ChartOption = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("result.json")
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);


  return (
    <div className="">
      <h3 className="text-4xl font-bold mb-8">There some data of result</h3>
      <LineChart className="bg-gray-800" width={1000} height={800} data={result}>
        <Line dataKey={"physics"} strokeWidth={2} stroke="green" ></Line>
        <Line dataKey={"chemistry"} strokeWidth={2} stroke="red" ></Line>
        <Line dataKey={"chemistry"} strokeWidth={2} stroke="salmon" ></Line>
        <Line dataKey={"math"}></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default ChartOption;
