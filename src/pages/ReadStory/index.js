import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoryById } from '../../store/readStory/actions';

export default function ReadStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchStoryById(id))  
  },
  [])

  return (
    <div className='read-story'>
      HERE YOU READ A STORY
    </div>
  )
}