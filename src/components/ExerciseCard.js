import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='card'>
      <img src={exercise.gifUrl} alt={exercise.name}cd  />
      <h2>{exercise.name}</h2>
      <p >{exercise.type}</p>
      <p >{exercise.target}</p>
      <p>{exercise.bodyPart}</p>
    </div>
  );
};

export default ExerciseCard;