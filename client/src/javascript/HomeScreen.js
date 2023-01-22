import Row from "./Row"
import request from '../important/request'
import Banner from "./Banner"

function HomeScreen() {
    return (
        <div className="App" >
            <Banner />

            {/* These are for testing */}
            <Row title="Your List" type={"movie"}fetchUrl={request.fetchTrendingMovies} isLargeRow/>
            <Row title="Top Rated Movies" type={"movie"} fetchUrl={request.fetchTopRatedMovies} />
            <Row title="Top Rates Shows" type={"tv"} fetchUrl={request.fetchTopRatedTVShows} />
          
        </div>
      );
}

export default HomeScreen