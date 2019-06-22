import React from "react"
import Movie from "./Movie.js"

var MovieList = (props) => {
  var filteredMovies;
  //searchTerm = {this.state.searchTerm} movies = {exampleMovies}
  props.movies.map((movie) => {
    filteredMovies = props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchTerm.toLowerCase()));
  });
  console.log(filteredMovies);
  
  var movieRows = filteredMovies.map((movie) => {
    return (<Movie title = {movie.title} />)
  });

  

    return (
      <div>{movieRows}</div>
    )
}

export default MovieList;