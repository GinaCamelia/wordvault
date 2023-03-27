import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/wordUtils";

export default function RhymingWords(props) {
  const [rhymes, setRhymes] = useState([]);

  // declared an effect to be run when the props.value changes
  useEffect(() => {
    console.log(props);
    // declared an asyncronous function to to fetch synonyms from api
    async function fetchRhymingWords() {
      try {
        const response = await fetch(
          `https://api.datamuse.com/words?rel_rhy=${props.value}`
        );
        console.log("Response: ", response);
        //converted the response body to JSON
        const data = await response.json();
        console.log(data);
        // imported component from wordUtils.js filter, sort and reduce the 
        // data to a list of up to 10 unique words
        const rhymes = filteredWords(data);
        setRhymes(rhymes);
      } catch (error) {
        console.log(error);
      }
    }
    // call the function when the value changes
    fetchRhymingWords();
    // by adding props to the dependency array, React is re-running the effect whenever
    // props or props.value changes
  }, [props.value, props]);

  //render div that contains a list of rhyming words
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
