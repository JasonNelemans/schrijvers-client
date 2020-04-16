import React from "react";
import './index.css';
const moment = require('moment');

export default function Story(props) {
  const time = moment(props.createdAt).fromNow()

  return (
    <div className="story-container">
      <img width="70" height="90" alt="" />
      <div className="story-text">
        <h3>{props.title} </h3> 
        <p>
          <span>{props.pg}</span> <strong>Type: </strong> {props.type} (
          <em>{props.genre}</em>) Word count: {props.wordCount}
        </p>
        <span className="posted">Posted: {time} </span>
      </div>
    </div>
  );
}
