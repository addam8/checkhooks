import { useState } from "react";
import "./App.css";
import { moviesData } from "./movie-app/MoviesData";
import MoviesList from "./movie-app/MoviesList";
import AddMovies from "./movie-app/AddMovies";
import SearchMovie from "./movie-app/SearchMovie";


function App () {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);
  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="wrapper">
     
      <SearchMovie  setNameSearch={setNameSearch} />
      <AddMovies addNewMovie={addNewMovie} 
        setRatingSearch={setRatingSearch}/>
          
      <MoviesList moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch} />
    </div>
  );
}

export default App;
