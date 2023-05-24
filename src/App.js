// Import components
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';



function App() {

  // Use States
  const [current, weather, setCurrentWeather] = useState[null];
  const [forecast, setForecast] = useState[null]

  // Handle On Search Change
  const handleOnSearchChange = (searchData) => {
    // console.log(searchData)
    const [lat, lon] = searchData.value.split(" ");

    // API Call
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&${lon}&appid=${WEATHER_API_KEY}`);
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&${lon}&appid=${WEATHER_API_KEY}`);

    // Promise
    Promise.all([currentWeatherFetch, forecastFetch]);
      .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather(weatherResponse);
      setForecast(forecastResponse);
    })

}

return (
  <div className="search-container">
    {/* Search Component */}
    <Search onSearchChange={handleOnSearchChange} />
    {/* Current-Weather Component */}
    <CurrentWeather />
  </div>
)
}

export default App;
