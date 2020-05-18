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
  const [searchBar, setSearchBar] = useState('')
  const [author, setAuthor] = useState('all')
  const [minWordCount, setMinWordCount] = useState(0);
  const [maxWordCount, setMaxWordCount] = useState(1500);

  useEffect(() => {
    if (stories.length !== 0) return; //halts function if stories array already fetched
    dispatch(fetchStories()); //fetch all stories
  }, [dispatch, stories.length]);

  //create array of all pg ratings without duplicates
  const pgArray = [...new Set(stories.map((story) => story.pg))].sort(
    (a, b) => a - b
  );
  //create array of all types without duplicates
  const typeArray = [...new Set(stories.map((story) => story.type))];
  //create genre array of all genres without duplicates
  const genreArray = [...new Set(stories.map((story) => story.genre))];
  const wordCountArray = [0, 500, 1000, 1500];

  //filter stories array based on conditions of pg/type/genre/wordcount and author
  const filteredStories = stories.filter((story) => {
    if (
      (story.pg >= Number(age) || age.length === 3) &&
      (story.type === type || type.length === 3) &&
      (story.genre === genre || genre.length === 3) && 
      story.wordCount >= minWordCount &&
      story.wordCount <= maxWordCount &&
      (story.user.name === author.toLowerCase() || author.length === 3)
    ) {
      return true;
    }
    return false;
  });

  //if filteredStories array length === 0 (which means empty filter results), display message
  const headerText = filteredStories.length === 0 
  ? (<h3>Sorry, geen resultaten gevonden.</h3>) 
  : ("");
  
  //this prevents headerText from showing upon first loading the page. 
  const displayHeaderText = showText ? headerText : '';

  return (
    <div className="story-list">
      <h1>De verhalen</h1>
      {/**Search for writer in search bar */}
      <div className='search-writer-container'>
        <label>Zoek op schrijver:</label> <br/>
        <input type="text" value={searchBar} onChange={e => setSearchBar(e.target.value)}/> {   }
        <button onClick={() => setAuthor(searchBar)}>Zoek!</button>
      </div>
      {/**Sort on input filters */}
      <div className="sort-container">
        <div className="sort-text">Of sorteer op:</div>
        <div className="filters">
          {/**Age filter */}
          <div className="age-filter">
            <label htmlFor="age-select">Leeftijd:</label>
            <select
              name="age"
              id="age-select"
              onChange={(e) => {
                {/**Age will be set to user input value. True for all filters */}
                setAge(e.target.value)
                {/**If a single filter is activated showText will be set to true */} 
                setShowText(true)
              }}>
              <option value="all">Alle</option>
              {pgArray.map((pg) => {
                return (
                  <option value={pg} key={pg}>
                    {pg}+
                  </option>
                );
              })}
            </select>
          </div>
          {/**Type filter */}
          <div className="type-filter">
            <label htmlFor="type-select">Type:</label>
            <select
              name="type"
              id="type-select"
              onChange={(e) => {
                setType(e.target.value)
                setShowText(true)
              }}>
              <option value="all">Alle</option>
              {typeArray.map((type) => {
                return (
                  <option value={type} key={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {/**Genre filter */}
          <div className="genre-filter">
            <label htmlFor="genre-select">Genre:</label>
            <select
              name="genre"
              id="genre-select"
              onChange={(e) => {
                setGenre(e.target.value)
                setShowText(true)
              }}>
              <option value="all">Alle</option>
              {genreArray.map((genre) => {
                return (
                  <option value={genre} key={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
          {/**Mininum wordcount filter */}
          <div className="minWordCount-filter">
            <label htmlFor="minWordCount-select">Minimum aantal woorden:</label>
            <select
              name="minWordCount"
              id="minWordCount-select"
              onChange={(e) => {setMinWordCount(e.target.value)
                setShowText(true)
              }}>
              {wordCountArray.map((wordCount) => {
                return (
                  <option value={wordCount} key={wordCount}>
                    {wordCount}
                  </option>
                );
              })}
            </select>
          </div>
          {/**Maximum wordcount filter */}
          <div className="maxWordCount-filter">
            <label htmlFor="maxWordCount-select">Maximum aantal woorden:</label>
            <select
              name="maxWordCount"
              id="maxWordCount-select"
              onChange={(e) => {
                setMaxWordCount(e.target.value) 
                setShowText(true)
              }}>
              {wordCountArray.reverse().map((wordCount) => {
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
      {/**The error message if filter results are empty */}
      <div className="header-text">
        {displayHeaderText}
      </div>
      {/**Map over all filteredStories to render them */}
      <div className="all-stories">
        {filteredStories.map((story) => {
          return <Story key={story.id} {...story} />;
        })}
      </div>
    </div>
  );
}
