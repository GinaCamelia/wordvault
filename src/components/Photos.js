import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiKey = "563492ad6f91700001000001bb77275a5ea44eceb6658854a019ff59";
      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${props.value}&per_page=9`;
      let headers = { Authorization: apiKey };
      try {
        const response = await axios.get(pexelsApiUrl, { headers: headers });
        console.log(response);
        setPhotos(response.data.photos);
      } catch (error) {
        console.log(error);
      }
    }
    if (props.loaded) {
      fetchData();
      props.setLoaded(false);
    }
  }, [props.value, props]);

  return (
    <div className="Photos">
      <div className="row mb-5">
        {photos.map(function (photo, index) {
          return (
            <div className="col-sm-4 col-md-4 mb-2" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} className="img-fluid" alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
