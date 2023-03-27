import React, { useState } from "react";
import "./style.css";
import Synonyms from "./Synonyms";
import RhymingWords from "./RhymingWords";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    setKeyword("");
    setShowResults(true);
  };
  return (
    <div className="SearchContainer">
      <form onSubmit={search} className="SearchForm">
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
        <h4>Words that rhyme with <span className='keyword'>{keyword}:</span></h4>
        {showResults && (
          <>
            <RhymingWords value={keyword} setKeyword={setKeyword} key={"rhy"} />
          </>
        )}
      </div>

      <div className="response">
        <h4>Synonyms for <span className='keyword'>{keyword}:</span></h4>
        {showResults && (
          <>
            <Synonyms value={keyword} setKeyword={setKeyword} key={"syn"} />
          </>
        )}
      </div>
    </div>
  );
}
