import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useDispatch, useSelector } from 'react-redux';

export default function StoryList() {
  const dispatch = useDispatch();

  return (
    <div className='story-list'>
      <Jumbotron>
        <h1>The list of stories</h1>
      </Jumbotron>
    </div>
  )
}