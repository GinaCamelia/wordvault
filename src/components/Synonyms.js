import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function Synonyms(props) {
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    if (!props.loaded) {
      return;
    }
    async function fetchSynonyms() {
      const endpoints = ["rel_syn"];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const synonyms = filteredWords(data);
      setSynonyms(synonyms);
    }
    if (props.value) {
      fetchSynonyms();
      props.setLoaded(false);
    } else {
      setSynonyms([]);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        <ul>
          {synonyms.map((synonym) => (
            <li key={synonym}>{synonym}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
