import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/storyList/actions';
import { selectStories } from '../../store/storyList/selectors';
import Story from './Story';
import './index.css';

export default function StoryList() {
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);

  useEffect(() => {
    if(stories.length !== 0) return;
    dispatch(fetchStories())
  },  
  [dispatch])

  return (
    <div className='story-list'>
      <Jumbotron>
        <h1>The list of stories</h1>
      </Jumbotron>
      <div className='all-stories'>
        {stories.map(story => {
          return (
            <Story 
              key={story.id}
              {...story}
            />
          )
        })}
      </div>
    </div>
  )
}