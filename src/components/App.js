
import React from "react"
import Movie from "./Movie.js"
import NavBar from "./NavBar.js"
import exampleMovies from '../data/exampleMovies.js'
import Test from "./Test.js"
import MovieList from "./MovieList.js"
import AddMovie from "./AddMovie.js"
import SearchBar from "./SearchBar.js"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: "", insertMovie: ""}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({target}) {
    console.log(target);
    const {name, value} = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.insertMovie);
  }


  //create a filter between state and files

  render () {

    const {searchTerm, insertMovie} = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Movie List</td>
            </tr>
            <tr>
              <td>
              <AddMovie onSubmit = {this.handleSubmit} handleInputChange = {this.handleInputChange}/>
              <SearchBar searchTerm = {searchTerm} handleInputChange = {this.handleInputChange}/>
              <MovieList searchTerm = {this.state.searchTerm} movies = {exampleMovies}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default App;