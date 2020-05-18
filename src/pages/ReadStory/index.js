import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStoryById,
  fetchParagraph,
} from "../../store/readStory/actions";
import { selectStory } from "../../store/readStory/selectors";
import "./readStory.css";

export default function ReadStory() {
  const [paragraphNumber, setParagraphNumber] = useState(2);
  const { id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(selectStory);

  useEffect(() => {
    //Screen starts at top when page is visited
    window.scroll(0, 0);
    //Ensures lastParagraph value is false (on true: 'The End' is rendered) and clears paragraph array
    dispatch({type: 'FIRST_PARAGRAPH'})
    //Fetches the story where title and author is stored, titleCliked is updated
    dispatch(fetchStoryById(id));
    //First paragraph is fetched.
    dispatch(fetchParagraph(id, 1));
  }, [dispatch, id,]);

  //Code taken from Stackoverflow which registers when user reaches the bottom of the scroll
  window.onscroll = function (ev) {
    //If bottom of window scroll is reached the next paragraph is fetched
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      //Next paragraph is fetched with storyId and paragraphNumber arguments. 
      dispatch(fetchParagraph(id, paragraphNumber));
      //paragraphNumber is incremented.
      setParagraphNumber(paragraphNumber + 1);
    }
  };

  return (
    <div className="read-story">
      <div className="story-title">
        <h1>{story.title}</h1>
        <h3>Geschreven door: </h3>
        <h3 id='author-name'><em>{story.user.name}</em></h3>
      </div>
      <div className="paragraphs">
        {story.paragraphs.map((paragraph, i) => {
          if(!paragraph) return;
          return <p key={i}>{paragraph.text}</p>;
        })}
      </div>
      <div className="last-paragraph">
        {story.lastParagraph ? (
          <h3>
            <strong>THE END</strong>
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
