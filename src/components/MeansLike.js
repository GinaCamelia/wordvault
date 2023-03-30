import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function MeansLike(props) {
  const [meansLike, setMeansLike] = useState([]);

  useEffect(() => {
    if (!props.loaded) {
      return;
    }
    async function fetchMeansLike() {
      const endpoints = ["ml"];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const meansLike = filteredWords(data);
      setMeansLike(meansLike);
    }
    if (props.value) {
      fetchMeansLike();
      props.setLoaded(false);
    } else {
      setMeansLike([]);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        <ul>
          {meansLike.map((means) => (
            <li key={means}>{means}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
