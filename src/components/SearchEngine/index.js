import React, { useState, useEffect } from "react";
import './style.css';

export default function SearchEngine() {
  const [keyword, setKeyword] = useState('');
  const [relatedWords, setRelatedWords] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [uniqueWords, setUniqueWords] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    setKeyword("");
    setShowResults(true);
    setSearchHistory([...searchHistory, keyword]);
    setUniqueWords(
      relatedWords
      .filter((word) => word.word.length > 2)
      .sort(() => Math.random() -0.5)
      .reduce((uniqueWords, word) => {
        if(uniqueWords.length >= 10) {
          return uniqueWords;
        }
        if(!uniqueWords.includes(word.word)) {
          uniqueWords.push(word.word);
        }
        return uniqueWords;
      }, [])
    );
  };

  useEffect(() => {
    async function fetchRelatedwords() {
      const response = await fetch(
        `https://api.datamuse.com/words?rel_rhy=${keyword}`
      );
      console.log(response);
      const data = await response.json();
      setRelatedWords(data);
    }
    if (showResults && keyword) {
      fetchRelatedwords();
    }
  }, [showResults, keyword]);

  return (
    <div className="SearchContainer">
      <form onSubmit={search} className='SearchForm'>
        <input
          type="search"
          placeholder="Searching for ..."
          className="form-control SearchInput"
          onChange={handleChange}
          value={keyword}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary SearchButton"
        />
      </form>
      <div className="response">
        <h4>Rhyming words for <span className="keyword">{searchHistory[searchHistory.length -1]}</span>:</h4>
        {showResults && (
          <ul>
            {uniqueWords.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
