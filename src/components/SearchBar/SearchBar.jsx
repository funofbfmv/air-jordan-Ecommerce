import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Поиск"
        className="px-2 py-3 pr-6 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-primary focus:border-primary"
      />
      <button className="absolute mt-6 right-3 transform -translate-y-1/2">
<SearchIcon/>
      </button>
    </div>
  );
};

export default SearchBar;