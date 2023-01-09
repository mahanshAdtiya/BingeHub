import './App.css';
import Row from "./Row"
import request from './request'
import Banner from "./Banner"
import NavBar from './NavBar';

function App() {
  return (
    <div className="App" >

    <NavBar />

    <Banner/>

    <Row title="Your List" fetchUrl={request.fetchTrending} isLargeRow/>

    {/* These are for testing */}
    <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

    <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

    <Row title="Action" fetchUrl={request.fetchActionMovies} />

    <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />

    {/* <Row title="SHOWS" />

    <Row title="ANIMES" /> */}
      
    </div>
  );
}

export default App;
