// Import
import './current-weather.css'

// Current-Weateher Component
const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img className="weather-icon" src="icons/01d.png" alt="weather" />
        </div>
    );
}

// Export Component
export default CurrentWeather;