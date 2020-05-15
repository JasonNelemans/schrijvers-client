import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../../store/storyList/actions";
import { selectStories } from "../../store/storyList/selectors";
import Story from "./Story";
import "./index.css";

export default function StoryList() {
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const [showText, setShowText] = useState(false);
  const [age, setAge] = useState("all");
  const [type, setType] = useState("all");
  const [genre, setGenre] = useState("all");
  const [minWordCount, setMinWordCount] = useState(0);
  const [maxWordCount, setMaxWordCount] = useState(1500);

  useEffect(() => {
    if (stories.length !== 0) return;
    dispatch(fetchStories());
  }, [dispatch, stories.length]);

  const pgArray = [...new Set(stories.map((story) => story.pg))].sort(
    (a, b) => a - b
  );
  const typeArray = [...new Set(stories.map((story) => story.type))];
  const genreArray = [...new Set(stories.map((story) => story.genre))];
  const wordCountArray = [0, 500, 1000, 1500];

  const filteredStories = stories.filter((story) => {
    if (
      (story.pg >= Number(age) || age.length === 3) &&
      (story.type === type || type.length === 3) &&
      (story.genre === genre || genre.length === 3) &&
      story.wordCount >= minWordCount &&
      story.wordCount <= maxWordCount
    ) {
      return true;
    }
    return false;
  });

  const headerText =
    filteredStories.length === 0 ? (
      <h3>Sorry, this filter matches no titles.</h3>
    ) : (
      ""
    );

  const displayHeaderText = showText ? headerText : '';

  return (
    <div className="story-list">
      <h1>De verhalen</h1>
      <div className="sort-container">
        <div className="sort-text">Sorteer op:</div>
        <div className="filters">
          <div className="age-filter">
            <label htmlFor="age-select">Leeftijd:</label>
            <select
              name="age"
              id="age-select"
              onChange={(e) => {
                setAge(e.target.value) 
                setShowText(true)
              }}
            >
              <option value="all">selecteer</option>
              {pgArray.map((pg) => {
                return (
                  <option value={pg} key={pg}>
                    {pg}+
                  </option>
                );
              })}
            </select>
          </div>
          <div className="type-filter">
            <label htmlFor="type-select">Type:</label>
            <select
              name="type"
              id="type-select"
              onChange={(e) => {
                setType(e.target.value)
                setShowText(true)
              }}
            >
              <option value="all">selecteer</option>
              {typeArray.map((type) => {
                return (
                  <option value={type} key={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="genre-filter">
            <label htmlFor="genre-select">Genre:</label>
            <select
              name="genre"
              id="genre-select"
              onChange={(e) => {
                setGenre(e.target.value)
                setShowText(true)
              }}
            >
              <option value="all">selecteer</option>
              {genreArray.map((genre) => {
                return (
                  <option value={genre} key={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="minWordCount-filter">
            <label htmlFor="minWordCount-select">Minimum aantal woorden:</label>
            <select
              name="minWordCount"
              id="minWordCount-select"
              onChange={(e) => {setMinWordCount(e.target.value)
                setShowText(true)
              }}
            >
              <option value={0}>selecteer</option>
              {wordCountArray.map((wordCount) => {
                return (
                  <option value={wordCount} key={wordCount}>
                    {wordCount}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="maxWordCount-filter">
            <label htmlFor="maxWordCount-select">Maximum aantal woorden:</label>
            <select
              name="maxWordCount"
              id="maxWordCount-select"
              onChange={(e) => {
                setMaxWordCount(e.target.value) 
                setShowText(true)
              }}
            >
              <option value={1500}>selecteer</option>
              {wordCountArray.map((wordCount) => {
                return (
                  <option value={wordCount} key={wordCount}>
                    {wordCount}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="header-text">
        {displayHeaderText}
      </div>
      <div className="all-stories">
        {filteredStories.map((story) => {
          return <Story key={story.id} {...story} />;
        })}
      </div>
    </div>
  );
}
