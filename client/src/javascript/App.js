import '../css/App.css';
import HomeScreen from './HomeScreen';
import InfoPage from "./InfoPage";
import NavBar from './NavBar';
import { Route, Routes as BaseRoutes } from "react-router-dom";

function App() {
 
  return (
    <div className="App" >
      <NavBar />
      <BaseRoutes>
      
        <Route path="/" element={<HomeScreen />} />
        <Route path="/info-page/:number" element={<InfoPage/>} />

      </BaseRoutes>
    </div>
  );
}

export default App;
