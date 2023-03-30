import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/wordUtils";
import { fetchDataFromAPI } from "../utils/apiUtils";

export default function Meronyms(props) {
  const [partOf, setPartOf] = useState([]);

  useEffect(() => {
    if (!props.value) {
      return;
    }
    if (!props.loaded) {
      return;
    }
    async function fetchMeronyms() {
      const endpoints = ["rel_par"];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const partOfWord = filteredWords(data);
      setPartOf(partOfWord);
    }
    if (props.value) {
      fetchMeronyms();
      props.setLoaded(false);
    } else {
      setPartOf();
    }
  }, [props.value, props]);

  if (partOf.length === 0) {
    return null;
  } else {
    return (
      <div className="SearchContainer">
        <div className="response">
          <ul>
            {partOf.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
