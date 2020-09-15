import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function WatchList({currentViewHandler, setCurrentView}) {
const[watchList, setWatchList] = useState('');

useEffect( ()=>{
  fetch('http://localhost:4000/watchlist')
  .then(response=>{
    return response.json()
  }).then(result=>{
    console.log(result)
  })

},[])




  return (
    <>
    <h1>This is the watchlist page</h1>
    <input type="button" onClick={currentViewHandler} value="switch it back"/>
    </>
  )
}