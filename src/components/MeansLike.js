import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function MeansLike(props) {
  const [meansLike, setMeansLike] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    async function fetchMeansLike() {
      const endpoints = ['ml'];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      const meansLike = filteredWords(data);
      setMeansLike(meansLike);
      setShowResults(true);
    }
    if (props.value) {
      fetchMeansLike();
    } else {
      setMeansLike([]);
      setShowResults(false);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        {showResults && (
          <ul>
            {meansLike.map((means) => (
              <li key={means}>{means}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}