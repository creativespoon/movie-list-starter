
import React from "react"
import Movie from "./Movie.js"
import NavBar from "./NavBar.js"
import exampleMovies from '../data/exampleMovies.js'
import Test from "./Test.js"
import MovieList from "./MovieList.js"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {searchTerm: ""}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleChange (event) {
  //   // console.log("sup", event.target.value);
  //   var userInput = event.target.value;
  //   // exampleMovies.map((movie) => {
  //   //   if(movie.title)
  //   // }
  //   const result = exampleMovies.filter(word => word.title.length > 8);
  //   // const result = words.filter(word => word.length > 6);


  //   console.log("hey now", result);
  //   // console.log(event.target.value, exampleMovies);
  //   this.setState({value: event.target.value});
  // }

  handleInputChange({target}) {
    const {name, value} = target;
    // console.log(name);
    // if(exampleMovies[0].title.contains(value)){
    //   console.log("it it a MATCHHHH!")
    // }
    // console.log("the value is", value); 

    // console.log(exampleMovies[0].title);
    // var test = exampleMovies[0].title;
    // if (test.includes('mean')) {
    //   console.log("ITS A MATCHHHHH")
    // }
    // console.log('test is', test);

    var filteredMovies;
    exampleMovies.map((movie) => {
      filteredMovies = exampleMovies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
    });
    console.log(filteredMovies);
    
    // test.includes(value)? console.log('is') : console.log('is not');

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }
  //create a filter between state and files

  render () {

    const {searchTerm} = this.state;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Movie List</td>
            </tr>
            <tr>
              <td>
              {/* <Test text = {this.state}/> */}
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