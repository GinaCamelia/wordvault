import React, { useState } from "react";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState();

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    setKeyword("");
  };

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input 
        type="search" 
        value={keyword} 
        onChange={handleChange} />
      </form>
    </div>
  );
}
