import './App.css';
import Current_weather from './components/Current_weather';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    <Current_weather/>
    </>
  );
}

export default App;
