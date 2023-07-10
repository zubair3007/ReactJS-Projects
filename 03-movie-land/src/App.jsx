
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./icons8-search.svg";



const API_URL = "http://www.omdbapi.com/?apikey=c032e2d7";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {

    searchMovies('Jurassic Park');
  },[])

  return (

    <div className="app">
      <h1>MovieLand</h1>

     <div className="search">
      <input placeholder="Search for movies" 
      value ="X-Men"
      onChange={(()=>{})}/>
      <img src={SearchIcon}
      alt = "search" />
    </div>
    </div>
  )
};

export default App;
// c032e2d7 
