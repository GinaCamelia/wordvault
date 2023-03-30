import React, { useState } from "react";
import "./style.css";
import Synonyms from "./Synonyms";
import RhymingWords from "./RhymingWords";
import MeansLike from "./MeansLike";
import Photos from "./Photos";
import Meronyms from "./Meronyms";
import Triggers from "./Triggers";

export default function SearchForm(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(true);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    setLoaded(true);
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
        {/* <input
          type="submit"
          value="Search"
          className="btn btn-primary SearchButton"
        /> */}
      </form>
      <p className="hint">
        <span> Sugestions: </span> sunset, sunrise, sunshine, sunflower...
      </p>

      <div className="RhymingWords response">
        <h4>Words that rhyme: </h4>
        <RhymingWords
          value={keyword}
          setKeyword={setKeyword}
          key={"rhy"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>

      <div className="Synonyms response">
        <h4>Synonyms:</h4>
        <Synonyms
          value={keyword}
          setKeyword={setKeyword}
          key={"syn"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>

      <div className="MeansLike response">
        <h4> Means Like:</h4>
        <MeansLike
          value={keyword}
          setKeyword={setKeyword}
          key={"ml"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>

      <div className="Homophones response">
        <h4>Direct meronyms(part of):</h4>
        <Meronyms
          value={keyword}
          setKeyword={setKeyword}
          key={"par"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>

      <div className="Triggers response">
        <h4>Triggers(closely associated with a particular topic): </h4>
        <Triggers
          value={keyword}
          setKeyword={setKeyword}
          key={"trg"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>

      <div className="Photos response">
        <Photos
          value={keyword}
          setKeyword={setKeyword}
          key={"pho"}
          search={loaded}
          setLoaded={setLoaded}
          loaded={loaded}
        />
      </div>
    </div>
  );
}
