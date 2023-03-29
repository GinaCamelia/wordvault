import React, { useState, useEffect } from "react";
import "./style.css";
import Synonyms from "./Synonyms";
import RhymingWords from "./RhymingWords";
import MeansLike from "./MeansLike";
import Photos from "./Photos";
import axios from "axios";

export default function SearchForm(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [showResults, setShowResults] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [defaultData, setDefaultData] = useState({});

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);
  };

  useEffect(() => {
    async function fetchDefaultData() {
      const endpoints = ["rel_rhy", "rel_syn", "ml"];
      const params = [keyword, keyword, keyword];
      const apiUrl = `https://api.datamuse.com/words?${endpoints
        .map((e, i) => `${e}=${params[i]}`)
        .join("&")}`;
      const response = await axios.get(apiUrl);
      const defaultData = {
        rhymingWords: response.data.filter((item) =>
          item.hasOwnProperty("word")
        ),
        synonyms: response.data.filter((item) => item.hasOwnProperty("word")),
        meansLike: response.data.filter((item) => item.hasOwnProperty("word")),
      };
      setDefaultData(defaultData);
      setShowResults(true);
    }
    fetchDefaultData();
  }, [keyword]);

  const search = (event) => {
    event.preventDefault();
    setShowResults(true);
    const apiKey = "563492ad6f91700001000001bb77275a5ea44eceb6658854a019ff59";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: apiKey };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <p className="hint">
        <span>Sugestions:</span> sunset, sunrise, forest, tennis...
      </p>

      <div className="RhymingWords response">
        <h4>Words that rhyme: </h4>
        {showResults && (
          <RhymingWords
            value={keyword}
            setKeyword={setKeyword}
            key={"rhy"}
            data={defaultData.rhymingWords}
          />
        )}
      </div>

      <div className="Synonyms response">
        <h4>Synonyms:</h4>
        {showResults && (
          <Synonyms
            value={keyword}
            setKeyword={setKeyword}
            key={"syn"}
            data={defaultData.synonyms}
          />
        )}
      </div>

      <div className="MeansLike response">
        <h4> Means Like:</h4>
        {showResults && (
          <MeansLike
            value={keyword}
            setKeyword={setKeyword}
            key={"ml"}
            data={defaultData.meansLike}
          />
        )}
      </div>
      <div className="Photos">
        <Photos photos={photos} />
      </div>
    </div>
  );
}
