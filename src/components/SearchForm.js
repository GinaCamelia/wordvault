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
    <div className="container SearchContainer">
      <div className=" col-lg-12 d-flex justify-content-center ">
        <form onSubmit={search} className="SearchForm">
          <input
            type="search"
            placeholder="Searching for ..."
            className="form-control SearchInput"
            onChange={handleChange}
            value={keyword}
          />
        </form>
        <input
          type="submit"
          value="Search"
          className="btn btn-primary SearchButton"
        />
      </div>
      <div className="d-flex, flex-wrap justify-content-center">
        <p className="hint mt-1 mb-5 d-flex flex-row justify-content-center">
          <span>Suggestions:&nbsp;</span> sunset, sunrise, sunshine, sunflower, trunk, tree
          ...
        </p>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-12 mb-4">
          <div className="card border-0">
            <div className="card-body RhymingWords response">
              <h4 className="card-title">Words that rhyme: </h4>
              <RhymingWords
                value={keyword}
                setKeyword={setKeyword}
                key={"rhy"}
                search={loaded}
                setLoaded={setLoaded}
                loaded={loaded}
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-12 mb-4">
          <div className="card border-0">
            <div className="card-body Synonyms response">
              <h4 className="card-title d-flex align-items-start">
                Synonyms:{" "}
              </h4>
              <Synonyms
                value={keyword}
                setKeyword={setKeyword}
                key={"syn"}
                search={loaded}
                setLoaded={setLoaded}
                loaded={loaded}
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-12 mb-4">
          <div className="card border-0">
            <div className="card-body MeansLike response">
              <h4 className="card-title">Means like: </h4>
              <MeansLike
                value={keyword}
                setKeyword={setKeyword}
                key={"ml"}
                search={loaded}
                setLoaded={setLoaded}
                loaded={loaded}
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-12 mb-4">
          <div className="card border-0">
            <div className="card-body Meronyms response">
              <h4 className="card-title">Direct meronyms (part of): </h4>
              <Meronyms
                value={keyword}
                setKeyword={setKeyword}
                key={"par"}
                search={loaded}
                setLoaded={setLoaded}
                loaded={loaded}
              />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-12 mb-4">
          <div className="card border-0">
            <div className="card-body Triggers response">
              <h4 className="card-title">
                Triggers (closely associated with a particular topic):{" "}
              </h4>
              <Triggers
                value={keyword}
                setKeyword={setKeyword}
                key={"par"}
                search={loaded}
                setLoaded={setLoaded}
                loaded={loaded}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Photos">
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
