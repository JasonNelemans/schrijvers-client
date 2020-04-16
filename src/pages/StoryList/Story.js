import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const moment = require("moment");

export default function Story(props) {
  const time = moment(props.createdAt).fromNow();

  return (
    <div className="story-container">
      <img width="70" height="90" alt="" />
      <div className="story-text">
        <NavLink to={`/stories/${props.id}`} exact={true}>
          <h3>{props.title}</h3>
        </NavLink>
        <p>
          <span>{props.pg}</span> <strong>Type: </strong> {props.type} (
          <em>{props.genre}</em>) Word count: {props.wordCount}
        </p>
        <span className="posted">Posted: {time} </span>
      </div>
    </div>
  );
}
