import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoryById, fetchNextParagraph } from "../../store/readStory/actions";
import { selectStory } from "../../store/readStory/selectors";
import './index.css';

export default function ReadStory() {
  const [paragraphNumber, setParagraphNumber] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStory);

  useEffect(() => {
    dispatch(fetchStoryById(id));
    dispatch(fetchNextParagraph(id, paragraphNumber))
  }, []);

  return (
    <div className="read-story">
      <div className="story-title">
        <h1>{story.title}</h1>
        <h3>By {story.user.name}</h3>
      </div>
      <div className="paragraphs">
       
      </div>
    </div>
  );
}
