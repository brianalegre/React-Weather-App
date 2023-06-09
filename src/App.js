// Import components
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';



function App() {

  // Use States
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Handle On Search Change
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
    const [lat, lon] = searchData.value.split(" ");

    // API Call
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    // Promise
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        console.log(response)
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log());

  }

  console.log(currentWeather)
  console.log(forecast)


  return (
    <div className="search-container">
      {/* Search Component */}
      <Search onSearchChange={handleOnSearchChange} />
      {/* Current-Weather Component */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* Forecast Component */}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App;
