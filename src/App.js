import React from 'react';
import SearchForm from './components/SearchForm.js';

function App() {
  return (
    <div className='appContainer'>
      <div className='Header'>
        <h1>WORDVAULT</h1>
      </div>
      <SearchForm defaultKeyword='painting'/>
    </div>
  );
}

export default App;
