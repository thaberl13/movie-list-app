import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function WatchList({currentViewHandler, setCurrentView}) {
const[watchedMovie, setWatchMovie] = useState([]);



//fetch watched movies to display;
useEffect(()=>{
  axios.get('https://movie-list-staging.herokuapp.com/watchlist')
  .then(result=>{
    result.data.splice(0,13)
    console.log(result.data)
    return setWatchMovie(result.data)
  })
},[])






  return (
    <>
    <div id="movie-container">
      {watchedMovie.map((movie, index) => ( 
    <div className="each-movie" key={index}>
  <ul className="movie-cell">
  <img className="movie-cover-image" src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}/>
    {movie.title} <br />
    {/* Overview:{movie.overview} <br/> */}
    Release Date: {movie.release_date} <br/>
    Average Rating: {movie.vote_average} <br/>
    User Voter Count: {movie.vote_count}
  </ul>
  </div>))}
  </div>
    </>
  )
}