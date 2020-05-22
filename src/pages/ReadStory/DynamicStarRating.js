import React, { useState } from 'react' 
import { FaStar } from 'react-icons/fa'

export default function DynamicStarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  //To determine what message rendered after rating given
  let ratingText; 
  if(rating === null) {
    ratingText = ''
  } else if(rating === 1) {
    ratingText = `You rated ${rating} star!`
  } else {
    ratingText = `You rated ${rating} stars!`
  }

  return (
    <div className='dynamic-star-container'>
      {/**Maps over array of 5 to return imported star icon */}
     {[...Array(5)].map((star, i) => {
       //Determines rating value by index + 1
       const ratingValue = i + 1;

       return (
         <label>
           {/**Render input radio (made invisible in CSS) for star to be checked */}
           <input 
            type='radio'
            name='rating'
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
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