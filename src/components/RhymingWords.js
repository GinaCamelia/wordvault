import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/wordUtils";
import { fetchDataFromAPI } from "../utils/apiUtils";

export default function RhymingWords(props) {
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    if (!props.value) {
      return;
    }
    if (!props.loaded) {
      return;
    }
    async function fetchRhymingWords() {
      const endpoints = ["rel_rhy"];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const rhymes = filteredWords(data);
      setRhymes(rhymes);
    }
    if (props.value) {
      fetchRhymingWords();
      props.setLoaded(false);
    } else {
      setRhymes([]);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        <ul>
          {rhymes.map((rhyme) => (
            <li key={rhyme}>{rhyme}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
