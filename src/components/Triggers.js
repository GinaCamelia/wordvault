import React, { useState, useEffect } from "react";
import "./style.css";
import { filteredWords } from "../utils/WordUtils.js";
import { fetchDataFromAPI } from "../utils/ApiUtils";

export default function Triggers(props) {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    if (!props.loaded) {
      return;
    }
    async function fetchTriggers() {
      const endpoints = ["rel_trg"];
      const params = [props.value];
      const apiUrl = await fetchDataFromAPI(endpoints, params);
      const data = await apiUrl;
      console.log(data);
      const trigger = filteredWords(data);
      setTriggers(trigger);
    }
    if (props.value) {
      fetchTriggers();
      props.setLoaded(false);
    } else {
      setTriggers([]);
    }
  }, [props.value, props]);

  return (
    <div className="SearchContainer">
      <div className="response">
        <ul>
          {triggers.map((trigger) => (
            <li key={trigger}>{trigger}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
