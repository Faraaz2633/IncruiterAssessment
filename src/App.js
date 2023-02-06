import "./styles.css";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="componentWrapper">
      <h2> DISTRUBUTION COMPARISION </h2>
      <ul>
        <li>
          {" "}
          <h3>
            <Link to="/barchart-chartjs">
              {" "}
              Distribution Comparison created using Chart.js
            </Link>
          </h3>{" "}
        </li>
        <li>
          {" "}
          <h3>
            <Link to="/barchart">
              {" "}
              Distribution Comparison created using SVG{" "}
            </Link>
          </h3>{" "}
        </li>
      </ul>
      <h2>
        <Link to="/highlight-text"> TEXT HIGHLIGHT</Link>
      </h2>
    </div>
  );
}
