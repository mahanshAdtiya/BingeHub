import Row from "./Row"
import request from '../important/request'

function ShowPage() {
    return (
        <div className="App" >

            <Row title="Latest" fetchUrl={request.fetchTrendingTVShows}/>
            <Row title="Trending" fetchUrl={request.fetchTrendingTVShows}/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRatedTVShows} />
          
        </div>
      );
}

export default ShowPage