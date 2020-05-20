import React from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { NavLink } from "react-router-dom";
import { updateTitleClicked } from "../../store/readStory/actions";
const moment = require("moment");

export default function Story(props) {
  const time = moment(props.createdAt).fromNow(); //to when story was posted
  const dispatch = useDispatch();

  const clickHandler = () => {
    //Update titleClicked value for heatmap
    dispatch(updateTitleClicked(props.id, props.titleClicked));
  };
  
  /**This calculates the ratings average, converts it to percentages and rounds it to 
   * even decimal numbers. The percentage is used to set the width of the 'stars-inner'
   * class, which is the filled stars.  */
  const ratingsSumTotal = props.ratings.map(rating => rating.amount).reduce((a, b) => a + b, 0);
  const averageRating = ratingsSumTotal / props.ratings.length;
  const starPercentage = `${Math.round((averageRating / 5) * 100)}%`
  const starWidth = props.ratings.length === 0 ? 0 : starPercentage;

  return (
    <div className="story-container">
      <img width="70" height="90" alt="" src={props.imgUrl}/>
      <div className="story-text">
        <NavLink to={`/stories/${props.id}`} exact={true} onClick={clickHandler}>
          <h3 style={{ fontFamily: "sans serif", fontSize: "30px", margin: 0, display: 'inline-block' }}>
            {props.title}
          </h3>
        </NavLink>
          <div className="stars-outer">
            <div className="stars-inner" style={{width: starWidth}}></div>
          </div>
        <em> {props.ratings.length} ratings</em>
        <br/>
        <span className="author"> door: {props.user.name}</span> <br/>
        <p>
         Type: <strong>{props.type}</strong> (<em>{props.genre}</em>) 
         Aantal woorden: <strong>{props.wordCount}</strong> 
         <span className='age'> Leeftijd: {props.pg}+</span>
        </p>
        <span className="posted">Posted: {time} </span>
      </div>
    </div>
  );
}
