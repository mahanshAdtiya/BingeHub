import Row from "./Row"
import request from '../important/request'
import Banner from "./Banner"

function HomeScreen() {
    return (
        <div className="App" >
            <Banner />

            {/* These are for testing */}
            <Row title="Your List" fetchUrl={request.fetchTrendingMovies} isLargeRow/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRatedMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Action" fetchUrl={request.fetchActionMovies} />
            <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
          
        </div>
      );
}

export default HomeScreen