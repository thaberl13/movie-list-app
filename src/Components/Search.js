import React, {useState, useRef} from 'react';
import axios from 'axios';

export default function Search() {
const[text, setText] =useState("");
const [searchedMovie, setSearchedMovie] = useState([]);
const[movieCover, setMovieCover] =useState();
const[movieToSave, setMovieToSave] = useState();


async function fetchMovie() {
  let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b0cc5bf59e460eccc495f44a91a8ba91&language=en-US&query=${text}&page=1&include_adult=false`);
  setSearchedMovie(res.data.results)
}

function addToWatchListHandler(index) {
 fetchDb(searchedMovie[index])
  // console.log(searchedMovie[index].title)
  // console.log(searchedMovie[index].overview)
  // console.log(searchedMovie[index].release_date)
  // console.log(searchedMovie[index].poster_path)
  // console.log(searchedMovie[index].vote_average)
  // console.log(searchedMovie[index].vote_count)
  // console.log(searchedMovie[index].backdrop_path)

//   async function fetchDb() {
//   let res = await axios.post('https://movie-list-staging.herokuapp.com/watchlist', {
//     "title": searchedMovie[index].title,
//     "overview": searchedMovie[index].overview,
//     "release_date": searchedMovie[index].release_date,
//     "poster_path": searchedMovie[index].poster_path,
//     "vote_avg": searchedMovie[index].vote_average,
//     "vote_count": searchedMovie[index].vote_count,
//     "backdrop_path": searchedMovie[index].backdrop_path
//   }).then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   console.log(res.data)
// }
}

async function saveMovieToDb() {
  // let res = await axios.post('https://movie-list-staging.herokuapp.com/watchlist', {
  //   "title": `"${movieToSave}"`
  // }).then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // console.log(res)
}



//post to db
// async function fetchDb() {
//   let res = await axios.post('https://movie-list-staging.herokuapp.com/watchlist', {
//     "title": "Blood In Blood Out",
//     "overview": "VATOS LOCOS FOR LIFE!!!",
//     "release_date": "1993-02-05",
//     "poster_path": "/yzkgJyi4qXDG0SJsIzF1dQAxpXe.jpg",
//     "vote_avg": 10,
//     "vote_count": 1000,
//     "backdrop_path": "https://i.pinimg.com/736x/59/1b/34/591b34ed885214734826ab1c5b354dc7--chicano-movies-gangster-movies.jpg"
//   }).then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   console.log(res.data)
// }


  async function fetchDb(movie) {
  let res = await axios.post('https://movie-list-staging.herokuapp.com/watchlist', {
    "title": movie.title,
    "overview": movie.overview,
    "release_date": movie.release_date,
    "poster_path": movie.poster_path,
    "vote_avg": movie.vote_average,
    "vote_count": movie.vote_count,
    "backdrop_path": movie.backdrop_path
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(res)
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
    <input type="button" value="Add to Watch-list" onClick={()=>{
    addToWatchListHandler(index)
  }} />
  </ul>
  </div>))}
  </div>
      </div>
    );
}

