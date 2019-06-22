import React from "react"
import $ from "jquery";

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.getMovieData = this.getMovieData.bind(this);

  }
  handleClick() {
    this.setState({clicked: !this.state.clicked})
    this.getMovieData();
  }

  getMovieData() {
    const movieName = this.props.title;
    const URL = 
  `https://api.themoviedb.org/3/search/movie`
    $.ajax(URL, {
      type:"GET",
      data: {
        api_key: '1a0f59053ba590035c95b4d1fe3d5975',
        query: movieName
      },
      success: (data) => console.log(data)
    })
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
        "Release Date: 2000"
        "Runtime: 107min"
        "Pop"
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