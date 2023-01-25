import './App.css';
import Current_weather from './components/Current_weather';
import Navbar from './components/Navbar';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;

  const[city, setCity] = useState();

  const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  function getWeather(e){
    e.preventDefault();
    fetch(currentAPI).then(data => data.json())
    .then(response => console.log(response));
  }

  return (
    <>
    <Navbar/>
    <Current_weather resultProp={getWeather} cityProp={(e)=>{setCity(e.target.value)}}/>
    </>
  );
}

export default App;
