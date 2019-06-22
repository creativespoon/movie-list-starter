import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import exampleMovies from './data/exampleMovies.js'

ReactDOM.render(<div><App movies = {exampleMovies}/></div>, document.getElementById('app'));
