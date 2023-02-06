import "./HighlightText.css";
import { PARAGRAPH, TEXT_OBJECT } from "../../utils/constants";

export const HighlightText = () => {
  let result = PARAGRAPH;
  Object.entries(TEXT_OBJECT).forEach(([key, value]) => {
    const regex = new RegExp(`(${key})`, "gi");
    result = result.replace(
      regex,
      `<span class="container bgColor__${value}">${key}<span class="inner_text">${value}</span></span>`
    );
  });

  return (
    <div className="componentWrapper">
      <p dangerouslySetInnerHTML={{ __html: result }}></p>
    </div>
  );
};
