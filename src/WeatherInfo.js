// WeatherInfo.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const WeatherInfo = () => {
  const [processedCityData, setProcessedCityData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleString('en-US', options);
  };

  useEffect(() => {
    const citiesData = {
      "List": [
        {"CityCode": "1248991", "CityName": "Colombo", "Temp": "33.0", "Status": "Clouds"},
        {"CityCode": "1850147", "CityName": "Tokyo", "Temp": "8.6", "Status": "Clear"},
        {"CityCode": "2644210", "CityName": "Liverpool", "Temp": "16.5", "Status": "Rain"},
        {"CityCode": "2147714", "CityName": "Sydney", "Temp": "27.3", "Status": "Rain"},
        {"CityCode": "4930956", "CityName": "Boston", "Temp": "4.2", "Status": "Mist"}
      ]
    };

    const getWeatherIconClass = (condition) => {
      switch (condition) {
        case 'Broken Clouds':
          return 'weather-icon-broken-clouds';
        case 'Clear':
          return 'weather-icon-clear-sky';
        case 'Few Clouds':
          return 'weather-icon-few-clouds';
        case 'Light Rain':
          return 'weather-icon-light-rain';
        case 'Mist':
          return 'weather-icon-mist';
        case 'Clouds':
          return 'weather-icon-clouds';
        // Add more cases for other weather conditions as needed
        default:
          return '';
      }
    };
    

    const cityCodes = citiesData.List.map(city => city.CityCode);

    const apiKey = '5a860fd4bdc18e1897feaaf0c8a30a67';
    const baseUrl = 'http://api.openweathermap.org/data/2.5/group';
    const unitType = 'metric';

    const url = `${baseUrl}?id=${cityCodes.join(',')}&units=${unitType}&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(weatherData => {
        const processedData = [];

        const cityCards = weatherData.list.map(cityWeather => {
          const cityCode = cityWeather.id.toString();

          if (!processedData.includes(cityCode)) {
            processedData.push(cityCode);

            const cityData = citiesData.List.find(city => city.CityCode === cityCode);

            return (
              <div className='city-card' key={cityCode}>
                <div className="city-card-top">
                
                  <div className="city-name">{cityData.CityName}, {cityWeather.sys.country}</div>
                  <div className="city-temp"><h4>{Math.round(cityWeather.main.temp)} °C</h4></div>
                 


                  <div className="city-condition">
                      <div className={`city-condition-icon ${getWeatherIconClass(cityWeather.weather[0].main)}`}></div>
                      <div className="city-condition-text">{cityWeather.weather[0].main}</div>
                  </div>

                  
                
                

                  


                  <div className="city-time">{formatTime(cityWeather.dt)}, {formatDate(cityWeather.dt)}</div>
         
                  <div className="city-temp-min">
                  <h4>Temp Min: {Math.floor(cityWeather.main.temp_min)}°C</h4>
                  <h4>Temp Min: {Math.floor(cityWeather.main.temp_max)}°C</h4>
                 
                  </div>
                  
                </div>
                <div className="city-card-bottom">
                <img src='assets/line.png' alt=''></img>

                <div className="city-pressure">Pressure: {cityWeather.main.pressure} hPa</div>
                  <div className="city-humidity">Humidity: {cityWeather.main.humidity}%</div>
                  <div className="city-visibility">Visibility: {cityWeather.visibility / 1000.0} km</div>

                  <div className="city-wind">
                  <img src='assets/arrow.png' alt=''></img>
                  {cityWeather.wind.speed} m/s {cityWeather.wind.deg} Degree</div>
                  <div className="city-sunrise">
                  <p>Sunrise: {formatTime(cityWeather.sys.sunrise)}</p>

                  <p>Sunset: {formatTime(cityWeather.sys.sunset)}</p>
                  </div>
                </div>
              </div>
            );
            
          }

          return null;
        });

        setProcessedCityData(processedData);

        const weatherContainer = document.getElementById('weather-container');
        ReactDOM.render(cityCards, weatherContainer);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  const handleSearch = () => {
    // Perform search based on searchQuery
    // ...

  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div >
    <div class =" header">
      
      <div class="weather">
        <img src='assets/cloud_icon.png' alt=''></img>
        <h1>Weather App</h1>

      </div>


      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter a city"
        />
        <button onClick={handleSearch}>Add City</button>
      </div>

    </div>
      
      
      <div id="weather-container"></div>

      <footer>
      2021 Fidenz Technologies
    </footer>

    </div>
  );
};

export default WeatherInfo;
