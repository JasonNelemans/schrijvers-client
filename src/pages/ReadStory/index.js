import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoryById } from "../../store/readStory/actions";
import { selectStory } from "../../store/readStory/selectors";
import './index.css';

export default function ReadStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStory);

  console.log(story);
  console.log(story.user);

  useEffect(() => {
    dispatch(fetchStoryById(id));
  }, []);

  return (
    <div className="read-story">
      <div className="story-title">
        <h1>{story.title}</h1>
        <h3>By {story.user.name}</h3>
      </div>
    </div>
  );
}
