import './App.css';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;

  const currentAPI = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`

  const forecastAPI = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=London`;

  fetch(currentAPI).then(data => data.json())
  .then(response => console.log(response));

  fetch(forecastAPI).then(data => data.json())
  .then(response => console.log(response));

  return (
    <>
    <h1>Weather App</h1>
    </>
  );
}

export default App;
