import React, {useState, useEffect} from 'react'
import axios from "./axios"
import "./Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row( {title,fetchUrl,isLargeRow} ) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies(){  
      const request = await axios.get(fetchUrl)
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies()
  }, [fetchUrl])

  // console.table(movies);

  return (
    <div className='row'>

        <h2 className="title" >{title}</h2>

        <div className='row_posters_containers'>
        {movies.map(movie => ( 
          <img key={movie.id} className={`row_poster_img ${isLargeRow ? "Large" : ""}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          // <img key={movie.id} className= "row_poster_img" src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          // <img key={movie.id} className="row_poster_img" src={`${baseURL}${movie.poster_path}`} alt={movie.title}/>
        ))}

        </div>

    </div>
  )
}
export default Row
