import React, { useState, useEffect } from "react";
import "./style.css";

export default function Synonyms({
  keyword,
  setKeyword,
  searchHistory = [],
  setSearchHistory,
  showResults,
  setShowResults,
}) {
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
      async function fetchSynonyms() {
        const response = await fetch(
          `https://api.datamuse.com/words?rel_syn=${keyword}`
        );
        const data = await response.json();
        const similarWord = setKeyword("");
        console.log(`I want to see the following word: ${similarWord}`);
        const similarWords = data.similarWords || data;
        console.log(similarWords);
        const uniqueWords = similarWords
          .filter((word) => word.word.length > 2)
          .sort(() => Math.random() - 0.5)
          .reduce((uniqueWords, word) => {
            if (uniqueWords.length >= 10) {
              return uniqueWords;
            }
            if (!uniqueWords.includes(word.word)) {
              uniqueWords.push(word.word);
            }
            return uniqueWords;
          }, []);
        setSynonyms(uniqueWords);
        setSearchHistory([...searchHistory, keyword]);
        setShowResults(true);
      }
      if (showResults && keyword) {
      fetchSynonyms(); 
    }
  }, [
    keyword,
    setKeyword,
    searchHistory,
    setSearchHistory,
    showResults,
    setShowResults,
  ]);

  //why is the return statement not rendering the synonyms?
  
  return (
    <div className="SearchContainer">
      <div className="response">
        <h4>
          Synonyms for{" "}
          <span className="keyword">
            {searchHistory[searchHistory.length - 1]}
          </span>
          :
        </h4>
        {showResults && (
          <ul>
            {synonyms.map((synonym) => (
              <li key={synonym.word}>{synonym.word}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
