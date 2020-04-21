import React from "react";
import { useDispatch } from 'react-redux';
import "./index.css";
import { NavLink } from "react-router-dom";
import { updateTitleClicked } from "../../store/storyInfo/actions";
const moment = require("moment");

export default function Story(props) {
  const time = moment(props.createdAt).fromNow();
  const dispatch = useDispatch();
  let titleClicked = props.titleClicked;

  const clickHandler = () => {
    titleClicked++
    dispatch(updateTitleClicked(props.id, titleClicked));
  }

  return (
    <div className="story-container">
      <img width="70" height="90" alt="" />
      <div className="story-text">
        <NavLink to={`/stories/${props.id}`} exact={true} onClick={clickHandler}>
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
