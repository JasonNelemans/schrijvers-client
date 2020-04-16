import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/storyList/actions';

export default function StoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories())
  },  
  [dispatch, fetchStories])

  return (
    <div className='story-list'>
      <Jumbotron>
        <h1>The list of stories</h1>
      </Jumbotron>
    </div>
  )
}