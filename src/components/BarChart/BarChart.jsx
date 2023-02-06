import { useState } from "react";
import { Bar } from "./Bar";
import "./BarChart.css";
import { faresData, ageData } from "../../utils/constants";

export const BarChart = () => {
  const [showAges, setShowAges] = useState(true);
  const [highlightAges, setHighlightAges] = useState(false);
  const [showFares, setShowFares] = useState(true);
  const [highlightFares, setHighlightFares] = useState(false);

  const cell_size = 20;
  const BAR_SIZE = cell_size * 2;
  const SCALE_COUNT = 13;
  const HORIZONTAL_MARGIN = 26;
  const VERTICAL_MARGIN = 24;
  const BAR_RANGE = 560;

  const WIDTH = BAR_SIZE * SCALE_COUNT + HORIZONTAL_MARGIN + 10 * 2;
  const HEIGHT = cell_size * 10 + VERTICAL_MARGIN * 2;

  const fares = [];
  for (const key in faresData) {
    fares.push({
      x1: +key.split(",")[0].trim() * BAR_RANGE,
      x2: +key.split(",")[1].trim() * BAR_RANGE,
      y: faresData[key] * 4,
      content: key
    });
  }
  const ages = [];

  for (const key in ageData) {
    ages.push({
      x1: +key.split(",")[0].trim() * BAR_RANGE,
      x2: +key.split(",")[1].trim() * BAR_RANGE,
      y: ageData[key] * 4,
      content: key
    });
  }

  return (
    <div className="componentWrapper">
      <div className="HeaderWrapper">
        <div className="SubContentWrapper">
          <div className="SubContent">
            <input
              type="checkbox"
              value={showAges}
              checked={showAges}
              onChange={(e) => setShowAges((prev) => !prev)}
            />{" "}
            Ages{" "}
          </div>
          <div className="SubContent">
            <input
              type="checkbox"
              value={highlightAges}
              checked={highlightAges}
              onChange={(e) => setHighlightAges((prev) => !prev)}
            />{" "}
            HighLight Ages
          </div>
        </div>
        <div className="SubContentWrapper">
          <div className="SubContent">
            <input
              type="checkbox"
              value={showFares}
              checked={showFares}
              onChange={(e) => setShowFares((prev) => !prev)}
            />{" "}
            Fares{" "}
          </div>
          <div className="SubContent">
            <input
              type="checkbox"
              value={highlightFares}
              checked={highlightFares}
              onChange={(e) => setHighlightFares((prev) => !prev)}
            />{" "}
            HighLight Fares
          </div>
        </div>
      </div>
      <svg
        // width={WIDTH}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{margin: "0 1rem", border: "1px solid #d8d8df" }}
      >
        {Array.from({ length: fares.length }, (_, index) => index).map(
          (c, i) => (
            <line
              key={c}
              x1={(i * WIDTH) / 12}
              x2={(i * WIDTH) / 12}
              y1={0}
              y2={HEIGHT}
              stroke={"#d8d8df"}
            />
          )
        )}
        {Array.from({ length: 5 }, (_, index) => index).map((c, i) => (
          <line
            key={c}
            x1={0}
            x2={WIDTH}
            y1={(i * HEIGHT) / 5}
            y2={(i * HEIGHT) / 5}
            stroke={"#d8d8df"}
          />
        ))}
        <g transform={`scale(1, -1) translate(0, ${-HEIGHT})`}>
          {showFares &&
            fares.map((fare) => (
              <Bar
                points={`
              ${fare.x1} ${0}
              ${fare.x2} ${0}
              ${fare.x2} ${fare.y * 2}
              ${fare.x1} ${fare.y * 2}
            `}
                fill={"#0066FF"}
                key={fare.content}
                fillOpacity={0.3}
                stroke={highlightFares ? "#0066FF" : ""}
                x={fare.x1 + fare.content.length}
                y={fare.y * 2}
                content={fare.content}
                description={`Fares: ${fare.y / 4}`}
                height={HEIGHT}
              />
            ))}
        </g>
        <g transform={`scale(1, -1) translate(0, ${-HEIGHT})`}>
          {showAges &&
            ages.map((age) => (
              <Bar
                points={`
              ${age.x1} ${0}
              ${age.x2} ${0}
              ${age.x2} ${age.y * 2}
              ${age.x1} ${age.y * 2}
            `}
                key={age.content}
                fill={"#FF0000"}
                fillOpacity={0.3}
                stroke={highlightAges ? "#FF0000" : ""}
                x={age.x1 + age.content.length}
                y={age.y * 2}
                content={age.content}
                description={`Age: ${age.y / 4}`}
                height={HEIGHT}
              />
            ))}
        </g>
      </svg>
    </div>
  );
};
