import React from 'react';
import SearchIcon from '../../icons/searchIcon';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-full p-1">
      <div className="flex justify-center items-center space-x-1">
        <div>
          <SearchIcon />
        </div>
        <input placeholder="Search courses" className="outline-none w-28" />
      </div>
    </div>
  );
};

export default SearchBar;
