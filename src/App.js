//import './App.css';
import React, { useEffect, useState }  from 'react';
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=93f22a4042904762bad8177fa7b12e52&page=1";



const SEACRH_API = "https://api.themoviedb.org/3/search/movie?api_key=93f22a4042904762bad8177fa7b12e52&query=";


function App() {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] =useState("");


useEffect( () => {
  getMovies(FEATURED_API);
}, []);

const getMovies = (API) => {
  fetch(API)
  .then((res) => res.json())
  .then((data) => {
    setMovies(data.results);
  });
};


const handleonSubmit = (e) => {
  e.preventDefault();

  if(searchTerm){
  getMovies(SEACRH_API + searchTerm);

  setSearchTerm(' ');
  
}
};

const handleonChange = (e) => {
  setSearchTerm(e.target.value);
};

  return (
  <>
  <header> 
    <form onSubmit={handleonSubmit}>
      <input 
        className='search'
        type='search'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleonChange}
      />
    </form>
  </header>
    <div className="movie-container">
      {movies.length >0 && movies.map((movie) =>
      <Movie key={movie.id} {...movie} />)}
    </div>
  </> );
  }

export default App;
