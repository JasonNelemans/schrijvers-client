import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectUser } from '../../store/user/selectors';
import { fetchStoryInfo } from '../../store/storyInfo/actions';
import { selectStoryInfo } from '../../store/storyInfo/selectors';

export default function StoryInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const info = useSelector(selectStoryInfo);

  useEffect(() => {
    if(!id) return;
    if(!user.id) return;
    if(info.paragraphs.length !== 0) return;
    dispatch(fetchStoryInfo(user.id, id))
  })

  return (
    <div className="story-info-container">
      <h1></h1>
    </div>  
  )
}