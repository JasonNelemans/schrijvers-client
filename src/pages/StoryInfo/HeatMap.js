import React from "react";

export default function HeatMap(props) {
  const timesClicked = props.titleClicked;

  const coloredParagraphs = props.paragraphs.map((para) => {
    return {
      ...para,
      percentile: (para.timesRead / timesClicked) * 100,
    };
  });

  return (
    <div className="heatmap">
      <div className="heatmap-paragraphs">
        
        {coloredParagraphs.map((paragraph) => {
          
          let color;
          if (paragraph.percentile > 0 && paragraph.percentile <= 25) {
            color = "#FFFFB7";
          } else if (paragraph.percentile > 25 && paragraph.percentile <= 50) {
            color = "#FFF192";
          } else if (paragraph.percentile > 50 && paragraph.percentile <= 75) {
            color = "#FFEA61";
          } else if (paragraph.percentile > 75 && paragraph.percentile <= 100) {
            color = "#FFDD3C";
          } else {
            color = "white";
          }
          return (
            <div key={paragraph.id}>
              <p>
                <span>
                  Paragraph: <strong>{paragraph.paragraphNumber}</strong>
                </span>
                {"  "}
                <span>
                  Times read: <strong>{paragraph.timesRead}</strong>
                </span>
                {"  "}
                <span>
                  Percentile: <strong>{Math.round(paragraph.percentile)}%</strong>
                </span>
              </p>
              <div
                className="heat-paragraph"
                style={{ backgroundColor: color }}
              >
                <p>{paragraph.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
