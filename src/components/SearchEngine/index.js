import React, { useState, useEffect } from "react";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState();
  const [relatedWords, setRelatedWords] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    setShowResults(true);
    setKeyword("");
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
    if (keyword) {
      fetchRelatedwords();
    }
  }, [keyword]);

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Searching for ..."
          className="formControl SearchInput"
          value={keyword}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary SearchButton"
        />
      </form>
      <div className="respose">
        <h4>
          Rhyming words for <span className="keyword">...</span>
        </h4>
        {showResults && (
          <ul>
            {relatedWords.map((word, index) => (
              <li key={index}>{word.word}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
