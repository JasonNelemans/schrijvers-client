import React from "react";

export default function HeatMap(props) {
  const timesClicked = props.titleClicked;

  /*Return new array to add percentile to each element. To show what percentage of readers
  reached which paragraph. */
  const coloredParagraphs = props.paragraphs.map((para) => {
    return {
      ...para,
      percentile: (para.timesRead / timesClicked) * 100,
    };
  });

  return (
    <div className="heatmap">
      <div className="heatmap-paragraphs">
        
        {/**Map over array to render on page */}
        {coloredParagraphs.map((paragraph) => {
          
          {/**Determine background color by percentile. The higher the percentile the darker
          the color. */}
          let color;
          if (paragraph.percentile > 0 && paragraph.percentile <= 25) {
            color = "#f26161";
          } else if (paragraph.percentile > 25 && paragraph.percentile <= 50) {
            color = "#f03939";
          } else if (paragraph.percentile > 50 && paragraph.percentile <= 75) {
            color = "#ea0909";
          } else if (paragraph.percentile > 75) {
            color = "#9a0707";
          } else {
            color = "white";
          }
          
          return (
            <div key={paragraph.id}>
              <div className="heat-paragraph" style={{ backgroundColor: color }} >
                <p>{paragraph.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
