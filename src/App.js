import React, {useState} from 'react';
import axios from 'axios';
import Search from './Components/Search'
import WatchList from './Components/WatchList'


function App() {
const [currentView, setCurrentView] = useState(false);

function currentViewHandler() {
  if(!currentView) {
    setCurrentView(true)
  } else {
    setCurrentView(false)
  }
}


  return (
    <div className="App">
     <img className="header-logo" src="https://i.ibb.co/vd1XGDj/movie-list-logo-png.png" alt="movie-dpng"/>
      <input type="button"onClick={currentViewHandler} value="Watch List"/>
      {currentView ? <WatchList setCurrentView={setCurrentView} currentViewHandler={currentViewHandler}/> : <Search/>}
    </div>
  );
}

export default App;

