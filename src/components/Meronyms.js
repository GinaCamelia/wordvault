import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function Meronyms(props) {
  const [partOf, setPartOf] = useState([]);
  const [showResults, setShowResults] = useState(true);

  useEffect(() => {
    async function fetchMeronyms() {
      const endpoints = ['rel_par'];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const partOfWord = filteredWords(data);
      setPartOf(partOfWord);
    //   setShowResults(false);
    }
    if (props.value) {
      fetchMeronyms();
    } else {
      setPartOf();
      setShowResults(false);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        {showResults && (
          <ul>
            {partOf.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}