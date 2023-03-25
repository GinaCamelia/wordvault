import React from 'react';
import SearchForm from './components/SearchForm.js';
import Synonyms from './components/Synonyms.js';

function App() {
  return (
    <div className='container'>
      <div className='Header'>
        <h1>WORDVAULT</h1>
      </div>
      <SearchForm />
      <Synonyms />
    </div>
  );
}

export default App;
