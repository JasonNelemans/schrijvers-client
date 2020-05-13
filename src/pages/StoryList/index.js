import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/storyList/actions';
import { selectStories } from '../../store/storyList/selectors';
import Story from './Story';
import './index.css';

export default function StoryList() {
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const [age, setAge] = useState('all');
  const [type, setType] = useState('all')
  const [genre, setGenre] = useState('all');
  const [minWordCount, setMinWordCount] = useState('all');
  const [maxWordCount, setMaxWordCount] = useState('all');

  useEffect(() => {
    if(stories.length !== 0) return;
    dispatch(fetchStories())
  },  
  [dispatch, stories.length])

  const pgArray = [...new Set(stories.map(story => story.pg))].sort((a, b) => a - b);
  const typeArray = [...new Set(stories.map(story => story.type))];
  const genreArray = [...new Set(stories.map(story => story.genre))];
  const wordCountArray = [500, 1000, 1500];

  return (
    <div className='story-list'>
        <h1>De verhalen</h1>
        <div className='sort-container'>
          <div className='sort-text'>
          Sorteer op:
          </div>
          <div className='filters'>
            <div className="age-filter">
                <label htmlFor="age-select">Leeftijd:</label>
                <select
                  name="age"
                  id="age-select"
                  onChange={e => setAge(e.target.value)}
                >
                  <option value="all">selecteer</option>
                  {pgArray.map(pg => {
                    return (
                      <option value={pg} key={pg}>
                        {pg}
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
                  onChange={e => setType(e.target.value)}
                >
                  <option value="all">selecteer</option>
                  {typeArray.map(type => {
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
                  onChange={e => setGenre(e.target.value)}
                >
                  <option value="all">selecteer</option>
                  {genreArray.map(genre => {
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
                  onChange={e => setMinWordCount(e.target.value)}
                >
                  <option value="all">selecteer</option>
                  {wordCountArray.map(wordCount => {
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
                  onChange={e => setMaxWordCount(e.target.value)}
                >
                  <option value="all">selecteer</option>
                  {wordCountArray.map(wordCount => {
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