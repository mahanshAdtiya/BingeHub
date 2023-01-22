import {useState, useEffect}from 'react';
import axios from "../important/axios"
import requests from '../important/request';
import "../css/Banner.css"

import { Link } from 'react-router-dom';

function Banner({flag}) {

  const[movie,setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTrendingMovies);
      setMovie(request.data.results && request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchMovie();
  }, []);

  function truncate(str, max) {
    // return str.length > max ? str.substr(0, max-1) + '…' : str;
    return str;
  }

  return (
    <header className='banner' 
    style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}>
      {/* <SearchBar className="searchBar" placeholder="Search.."/> */}

      <div className='banner_content'>

        <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name} </h1>

    
         <div className='banner_button_container'>

          <button onClick={(e) => {e.preventDefault()}} className='banner_button'><Link to={`info-page/movie/${movie.id}`}>Info</Link></button>
          <button className='banner_button'>Add</button>     
              
        </div>
      
      <h1 className='banner_description'> {truncate(movie?.overview,150)}</h1>

      </div>

      <div className='banner_fadeBottom'> </div>
    </header>
  )
}

export default Banner