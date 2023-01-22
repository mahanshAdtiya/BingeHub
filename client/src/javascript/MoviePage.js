import Row from "./Row"
import request from '../important/request'

function MoviePage() {
    return (
        <div className="App" >

            <Row title="Trending" fetchUrl={request.fetchTrendingMovies} isLargeRow/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
            <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
            <Row title="Action" fetchUrl={request.fetchActionMovies} />
            <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
          
        </div>
      );
}

export default MoviePage