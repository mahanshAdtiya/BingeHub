import {useState, useEffect}from 'react';
import axios from "./axios"
import requests from './request';
import "./Banner.css"

function Banner() {

  const[movie,setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results && request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchMovie();
  }, []);

  function truncate(str, max) {
    // return str.length > max ? str.substr(0, max-1) + '…' : str;
    return str;
  }

  console.log(movie);
  return (
    <header className='banner' 
    style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}>
      {console.log(movie?.backdrop_path)}

      <div className='banner_content'>

        <h1 className='banner_title'> {movie?.title || movie?.name || movie?.original_name} </h1>

        <div className='banner_button_container'>

          <button className='banner_button'>Info </button>
          <button className='banner_button'>No Idea</button>     
              
        </div>
      
      <h1 className='banner_description'> {truncate(movie?.overview,150)}</h1>

      </div>

      <div className='banner_fadeBottom'> </div>
    </header>
  )
}

export default Banner