import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      id: "bar-x-axis2",
      stacked: true,
      display: true,
      ticks: {
        display: false,
      },
    },

    y: {
      id: "bar-y-axis1",
      display: true,
      stacked: false,
      ticks: {
        beginAtZero: true,
        display: false,
      },
    },
  },
};

export const data = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "Age",
      data: [16, 16, 16, 17, 12, 24, 8, 13, 15, 16, 18, 12],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      categoryPercentage: 1,
      barPercentage: 1,
    },
    {
      label: "Fares",
      data: [16, 17, 14, 16, 14, 16, 14, 17, 14, 17, 12, 16],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      categoryPercentage: 1,
      barPercentage: 1,
    },
  ],
};

export function BarChartJs() {
  return (
    <div className="componentWrapper">
      {" "}
      <Bar options={options} data={data} />{" "}
    </div>
  );
}
