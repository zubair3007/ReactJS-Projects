
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./icons8-search.svg";
import MovieCard from "./MovieCard";





const API_URL = "http://www.omdbapi.com/?apikey=c032e2d7";

const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm ,setSearchTerm] = useState('');

  

  // const movie1 = {
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
  //   Title: "Jurassic Park",
  //   Type: "movie",
  //   Year: "1993",
   
  // };

  useEffect(() => {

    searchMovies('Jurassic Park');
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    < div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) =>(
            event.key === 'Enter' ? searchMovies(searchTerm) : null
                    )}
        />
        <img src={SearchIcon} alt="search" onClick={() =>searchMovies(searchTerm)} />
      </div>

     {movies?.length > 0  ?(
       <div className="container">
        {movies.map((movie) => (

        
        
        <MovieCard movie={movie} />
        
          ))}
      </div>
     ) :  (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
     )}
       
    
    </div>
  );
};

export default App;
// c032e2d7 
