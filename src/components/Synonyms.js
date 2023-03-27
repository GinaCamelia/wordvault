import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

// added synonym feature to component using Datamuse API
export default function Synonyms(props) {
  const [synonyms, setSynonyms] = useState([]);

  // declared an effect to be run when the props.value changes
  useEffect(() => {
    console.log(props);
    // declared an asyncronous function to to fetch synonyms from api
    async function fetchSynonyms() {
      const apiUrl = await fetchDataFromAPI('rel_syn', props.value);
      console.log(apiUrl);
      const data = await apiUrl;
      console.log(data);
      //filter, sort and reduce the data to a list of up to 10 unique words
      const synonyms = filteredWords(data);
      setSynonyms(synonyms);
    }
    // call the function when the value changes
    fetchSynonyms();
    // by adding props to the dependency array, React is re-running the effect whenever
    // props or props.value changes
  }, [props.value, props]);

  //render div that contains a list of synonyms
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
