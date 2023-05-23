// Import components
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';


function App() {

  // Handle On Search Change
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
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
