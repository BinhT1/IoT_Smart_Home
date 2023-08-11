import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function ChartComponent(props) {
  let temp = [];
  let hum = [];
  let date = [];
  if (props.data) {
    temp = props.data.map((e) => e.temperature);
    hum = props.data.map((e) => e.humidity);
    date = props.data.map((e) => moment(e.date).format("hh:mm:ss"));
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: "Nhiệt độ",
        data: temp,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "độ ẩm",
        data: hum,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  const MultiAxisLine = () => (
    <>
      <div className="header">
        <h1 className="title">Nhiệt độ và độ ẩm</h1>
      </div>
      <Line data={data} options={options} />
    </>
  );
  return <MultiAxisLine />;
}
