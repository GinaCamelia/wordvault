import React from "react";

export default function SearchEngine() {
  function search(){
    alert('Searching...');
  }
  
  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
