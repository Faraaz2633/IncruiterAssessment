import React, { useState } from "react";

export const Bar = ({
  points,
  fill,
  fillOpacity,
  stroke,
  x,
  y,
  content,
  description,
  height
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <polygon
        points={points}
        fill={fill}
        fillOpacity={fillOpacity}
        stroke={stroke}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {isHovering && (
        <g transform={`scale(1, -1) translate(0, ${-height})`}>
          <rect
            x={x}
            y={y / 5}
            fill={"#D8D8DF"}
            width={120}
            height={65}
            rx={10}
          />
          <text x={x + 10} y={y / 2.5}>
            <tspan x={x + 10}> {content} </tspan>
            <tspan x={x + 10} dy="1.2em">
              {description}
            </tspan>
          </text>
        </g>
      )}
    </>
  );
};
