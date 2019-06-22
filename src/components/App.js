
import React from "react"
import Movie from "./Movie.js"
import NavBar from "./NavBar.js"
import exampleMovies from '../data/exampleMovies.js'
import Test from "./Test.js"
import MovieList from "./MovieList.js"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: "", insertMovie: ""}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({target}) {
    const {name, value} = target;
    this.setState({
      [name]: value,
    });
    console.log('this is the stttate', this.state);
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
              <div className = "searchbar">
                <form>
                  <input type="text" placeholder="Add movie title here" value={insertMovie} onChange={this.handleInputChange} name="insertMovie"/>
                  <input type="submit" value="Add" />
                </form>
              </div>
              <div className = "searchbar">
                <form>
                  <input type="text" placeholder="Search..." value={searchTerm} onChange={this.handleInputChange} name="searchTerm"/>
                </form>
              </div>

                <table>
                  <tbody>
                    <MovieList searchTerm = {this.state.searchTerm} movies = {exampleMovies}/>
                    {/* {movieRows} */}
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}


// var App = () => {
//   return (<div>Whattttssssss up FUNCTIONALLLLL</div>)
// }


export default App;