import React, {useState} from 'react';
import axios from 'axios';

export default function Search() {
const[text, setText] =useState("");
const [searchedMovie, setSearchedMovie] = useState([]);
const[movieCover, setMovieCover] =useState();

async function fetchMovie() {
  let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b0cc5bf59e460eccc495f44a91a8ba91&language=en-US&query=${text}&page=1&include_adult=false`);
  setSearchedMovie(res.data.results)
  console.log(searchedMovie)
}

    return (
      <div className="App">

       {/* Navbar class */}
      <div id="nav-bar">
      <input type="text" id="search-input" onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <input type="button" id="search-button" onClick={fetchMovie} value="Search"/>
      </div>

{/* Search component */}
  <div id="movie-container">
      {searchedMovie.map((movie, index) => (
    <div className="each-movie" key={index}>
  <ul className="movie-cell">
  <img className="movie-cover-image" src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}/>
    {movie.title} <br />
    {/* Overview:{movie.overview} <br/> */}
    Release Date: {movie.release_date} <br/>
    Average Rating: {movie.vote_average} <br/>
    User Voter Count: {movie.vote_count}
    <input type="button" value="Add To Watch-list" onClick={()=>{
      axios.post('/watchlist')
      .then({
        title:"yo",
        overview:"hello",
        release_date:"test",
        poster_path:"lasdjkfalsjdf",
        vote_avg:"11",
        vote_count:"22",
        backdrop_path:"33"
      })
    }}/>
  </ul>
  </div>))}
  </div>
      </div>
    );
}

