import React from "react"
import Movie from "./Movie.js"

var MovieList = (props) => {
  var filteredMovies;
  //searchTerm = {this.state.searchTerm} movies = {exampleMovies}
  props.movies.map((movie) => {
    filteredMovies = props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchTerm.toLowerCase()));
  });
  
  var movieRows = filteredMovies.map((movie) => {
    return (<Movie key = {movie.title} title = {movie.title} />)
  });

  

    return (
      <table>
        <tbody>{movieRows}</tbody>
      </table>
    )
}

export default MovieList;