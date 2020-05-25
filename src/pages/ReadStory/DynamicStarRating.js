import React, { useState } from 'react' ;
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { giveRating } from '../../store/readStory/actions';

export default function DynamicStarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();

  //To determine what message rendered after rating given
  let ratingText; 
  if(rating === null) {
    ratingText = ''
  } else if(rating === 1) {
    ratingText = `You rated ${rating} star!`
  } else {
    ratingText = `You rated ${rating} stars!`
  }

  const clickHandler = (e) => {
    setRating(e.target.value);
    dispatch(giveRating(e.target.value, props.userId, props.storyId))
  }

  return (
    <div className='dynamic-star-container'>
      {/**Maps over array of 5 to return imported star icon */}
     {[...Array(5)].map((star, i) => {
       //Determines rating value by index + 1
       const ratingValue = i + 1;

       return (
         <label key={i}>
           {/**Render input radio (made invisible in CSS) for star to be checked */}
           <input 
            type='radio'
            name='rating'
            value={ratingValue}
            onClick={clickHandler}
           />
           {/**Render star icon with events */}
           <FaStar 
            className='star'
            //If being hovered will show hover value and otherwise rating 
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            size={75}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
           />
         </label>
       )
     })}
     <p>{ratingText}</p>
    </div>
  )
}