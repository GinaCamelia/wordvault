import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function Synonyms(props) {
  const [synonyms, setSynonyms] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    async function fetchSynonyms() {
      const endpoints = ['rel_syn'];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      const synonyms = filteredWords(data);
      setSynonyms(synonyms);
      setShowResults(true);
    }
    if (props.value) {
      fetchSynonyms();
    } else {
      setSynonyms([]);
      setShowResults(false);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        {showResults && (
          <ul>
            {synonyms.map((synonym) => (
              <li key={synonym}>{synonym}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}