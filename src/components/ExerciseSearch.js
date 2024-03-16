import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className='searchBarDiv'>
      <input
        type="text"
        placeholder="Search by target, body part, or exercise"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default ExerciseSearch;