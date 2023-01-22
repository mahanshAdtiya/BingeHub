import React, {useState, useEffect} from 'react'
import axios from "../important/axios"
import { Link} from 'react-router-dom';
import "../css/Row.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row( {title,fetchUrl,isLargeRow, type} ) {

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

  console.table(movies);

  return (
    <div className='row'>

        <h2 className="title" >{title}</h2>

        <div className='row_posters_containers'>
        {movies.map((movie, id) => (
          id < 12 && <Link key={movie.id} to={`info-page/${type}/${movie.id}`} className='Link'>
            <img key={movie.id} className={`row_poster_img ${isLargeRow ? "Large" : ""}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          </Link>

        ))}

        </div>

    </div>
  )
}
export default Row
