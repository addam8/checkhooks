import React from 'react'
import MovieCards from './MovieCard';

const MoviesList = ({ moviesList,nameSearch,ratingSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {moviesList
      .filter(
        (el) =>
          el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
          el.rating >= ratingSearch
      )
      .map((el) => (
        <MovieCards el={el}/>
      ))}
    </div>
  );
};

export default MoviesList
