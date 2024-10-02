// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
  <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto my-8">
  <div className="flex items-center py-2 backdrop-filter backdrop-blur-md">
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:text-white"
      type="text"
      placeholder="Search for books..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button
      className="flex-shrink-0 bg-transparent hover:bg-teal-700 border-none hover:border-teal-700 text-sm text-white py-1 px-2 rounded"
      type="submit"
    >
      Search
    </button>
  </div>
</form>
  );
};

export default SearchBar;
