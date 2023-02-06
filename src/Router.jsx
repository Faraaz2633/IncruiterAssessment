import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BarChart } from "./components/BarChart/BarChart";
import { BarChartJs } from "./components/BarChartJs/BarChartJs";
import { HighlightText } from "./components/HighlightText/HighlightText";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/barchart-chartjs" element={<BarChartJs />} />
        <Route path="/highlight-text" element={<HighlightText />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
