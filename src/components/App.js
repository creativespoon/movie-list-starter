
import React from "react"
import Movie from "./Movie.js"
import NavBar from "./NavBar.js"
import Test from "./Test.js"
import MovieList from "./MovieList.js"
import AddMovie from "./AddMovie.js"
import SearchBar from "./SearchBar.js"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: "",
      insertMovie: "",
      isFiltered: false
    }
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
    //this.setState({isFiltered:true})
  }


  //create a filter between state and files

  render () {
    // let generateMovieList = () => {
    //   if (this.state.isFiltered) {
    //     let filteredMovies = this.prop.movies.filter((movie) => movie.title
    //     return <div>sup</div>
    //   } else {
    //     return <div>Hello</div>
    //   }
    // }
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
              <SearchBar searchTerm = {searchTerm} handleInputChange = {this.handleInputChange} handleSubmit = {this.handleSubmit}/>
              <MovieList searchTerm = {this.state.searchTerm} movies = {this.props.movies}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default App;