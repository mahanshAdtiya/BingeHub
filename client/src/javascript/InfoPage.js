import { useState, useEffect } from 'react';
import axios from '../important/axios';
import { useParams } from 'react-router-dom';
import '../css/InfoPage.css';

const API_KEY = '42bc1a253c27bf29e93b507ba622a551';

function InfoPage() {
  const { id, type } = useParams();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, [id]);
  
  console.log(id);
  let { title, name, original_name, backdrop_path, genres, vote_average, runtime, overview} = movie;

  // useEffect(() => {
  //   runtime = type === "tv" ? episode_run_time : runtime
  // },[movie]);
  
  return (
    <header className="poster" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,}}>
      
      <div className="poster_content">

        <h1 className="poster_title">{title || name || original_name}</h1>

        <div className="genre_container">
          {genres?.map(({ name: genreName }) => (
            <h4 className="genre">{genreName}</h4>
          ))}

        </div>

        <div className="other_details">

          <h4 className="rating">{vote_average?.toFixed(1)}/10</h4>
          <h4 className="run-time">{Math.floor(runtime / 60)}h {runtime % 60}m</h4>

        </div>

        <div className="poster_button_container">
          <button className="poster_button">Add</button>
        </div>
        
        <h1 className="poster_description">{overview}</h1>

      </div>

      <div className="poster_fadeBottom" />

    </header>
  );
}

export default InfoPage;
