import React from 'react';
import useSpreadsheet from '../hooks/useSpreadsheet';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSpreadsheet();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="border border-gray-300 rounded px-2 py-1 w-full"
      />
    </div>
  );
};

export default SearchBar;
