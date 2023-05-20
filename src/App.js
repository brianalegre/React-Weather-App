// Import components
import './App.css';
import Search from './components/search/search';


function App() {

  // Handle On Search Change
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="search-container">
      {/* Search Component */}
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  )
}

export default App;
