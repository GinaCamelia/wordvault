import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function RhymingWords(props) {
  const [rhymes, setRhymes] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // declared an effect to be run when the props.value changes
  useEffect(() => {
    if(!props.value) return;
    console.log(props);
    // declared an asyncronous function to to fetch synonyms from api
    async function fetchRhymingWords() {
      const endpoints = ["rel_rhy"];
      const params = [props.value];
      // imported function from apiUtils.js
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      // console.log('The API url is ' + apiUrl);
      const data = await apiUrl;
      console.log(data);
      // imported component from wordUtils.js
      const rhymes = filteredWords(data);
      setRhymes(rhymes);
      setShowResults(true);
    }
    if (props.value) {
      fetchRhymingWords();
    } else {
      setRhymes([]);
      setShowResults(false);
    }
    // by adding props to the dependency array, React is re-running the effect whenever
    // props or props.value changes
  }, [props.value, props]);

  //render div that contains a list of rhyming words
  return (
    <div className="SearchContainer">
      <div className="response">
        {showResults && (
          <ul>
            {rhymes.map((rhyme) => (
              <li key={rhyme}>{rhyme}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}