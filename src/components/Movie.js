import React from "react"
import $ from "jquery";

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      popularity: '',
      releaseDate: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.getMovieData = this.getMovieData.bind(this);
    this.parseMovieData = this.parseMovieData.bind(this);

  }
  componentDidMount() {
    this.getMovieData();
  }
  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }

  getMovieData() {
    const movieName = this.props.title;
    const URL = `https://api.themoviedb.org/3/search/movie`
    $.ajax(URL, {
      type:"GET",
      data: {
        api_key: '1a0f59053ba590035c95b4d1fe3d5975',
        query: movieName
      },
      success: (data) => this.parseMovieData(data)
    })
  }
  parseMovieData(data) {
    const results = data.results[0];
    this.setState({popularity: results.popularity, releaseDate: results.release_date})
  }

  // this.setState(prevState => ({
  //   isToggleOn: !prevState.isToggleOn
  // }));

  render () {
    return (
      this.state.clicked ?
      <tr>
        <td onClick={this.handleClick}>
        {this.props.title}
        Release date: {this.state.releaseDate}
        Popularity: {this.state.popularity}
        </td>
      </tr> :
      <tr>
        <td onClick={this.handleClick}>
          {this.props.title}
        </td>
      </tr> 
    )
  }
}

// var Movie = (props) => {
//   return (
//     <tr>
//       <td>{props.title}</td>
//     </tr>
//   )
// }

export default Movie