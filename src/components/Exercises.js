import React, { useEffect, useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import ExerciseSearch from './ExerciseSearch';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [cards, setCards] = useState(10);
    const [searchInput, setSearchInput] = useState(''); // State for the search query
    const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '672444eaf8msh8b507bd5de45338p1fdda4jsn1ef9821237db',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const loadMoreCards = () => {
    setCards(cards + 10); // Increase the number of cards to display
  };

  const handleSearch = (query) => {
    setSearchInput(query); // Update the search query state
  };

  // Filter exercises based on the search query
  useEffect(() => {
    const filteredResults = exercises.filter((exercise) =>
      exercise.target.toLowerCase().includes(searchInput.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchInput.toLowerCase()) ||
      exercise.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [exercises, searchInput]);

  return (
    <div className="main">
      <h1>Exercise List</h1>
      
      <ExerciseSearch onSearch={handleSearch} />

      <div className="cardsDisplay">
        {searchResults.length > 0
          ? searchResults.slice(0, cards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))
          : exercises.slice(0, cards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
      </div>
      {cards < (searchResults.length > 0 ? searchResults : exercises).length && (
        <div className="loadMoreBtn">
          <button
            onClick={loadMoreCards}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;





