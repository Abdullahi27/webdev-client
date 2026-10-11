import "./index.css";
import ForegroundColors from "./ForegroundColors";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIconsSampler";


export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>

      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>

      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph uses a green background with yellow text.
      </p>

      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph uses a purple background with white text.
      </p>


      <ForegroundColors />
      <Positions />
      <ReactIconsSampler />

      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>


    </div>
  );
}

