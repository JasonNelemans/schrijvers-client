import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/storyList/actions';
import { selectStories } from '../../store/storyList/selectors';

export default function StoryList() {
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);

  useEffect(() => {
    dispatch(fetchStories())
  },  
  [dispatch])

  return (
    <div className='story-list'>
      <Jumbotron>
        <h1>The list of stories</h1>
      </Jumbotron>
      <div className='all-stories'>
        
      </div>
    </div>
  )
}