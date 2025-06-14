import React, { useState } from 'react';
import axios from '../axiosInstance';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await axios.get(`/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div>
      <input placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default Search;
