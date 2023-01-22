import '../css/App.css';
import HomeScreen from './HomeScreen';
import InfoPage from "./InfoPage";
import NavBar from './NavBar';
import MoviesPage from './MoviePage';
import ShowPage from "./ShowPage"
import { Route, Routes as BaseRoutes } from "react-router-dom";

function App() {
 
  return (
    <div className="App" >
      <NavBar />
      <BaseRoutes>
      
        <Route path="/" element={<HomeScreen />} />
        <Route path="/info-page/:type/:id" element={<InfoPage/>} />
        <Route path="/Movies" element={<MoviesPage/>} />
        <Route path='/Shows' element={<ShowPage/>} />
        {/* <Route path='/ Anime/anime_id' element={<AnimePage/>} /> */}

      </BaseRoutes>
    </div>
  );
}

export default App;
