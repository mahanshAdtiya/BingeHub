const API_KEY = "42bc1a253c27bf29e93b507ba622a551";

const request = {
  fetchTrendingMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, 
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchTrendingTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetChLatestShows: `/tv/latest?api_key=${API_KEY}&language=en-US`,
};

export default request;
