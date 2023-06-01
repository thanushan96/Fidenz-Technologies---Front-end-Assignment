// WeatherInfo.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

const WeatherInfo = () => {
  const [processedCityData, setProcessedCityData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
              <div key={cityCode} className="city-card">
                <div className="city-name">{cityData.CityName}</div>
                <div className="city-temp">Temperature: {cityWeather.main.temp} °C</div>
                <div className="city-status">Weather: {cityWeather.weather[0].description}</div>
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
    <div>
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Add City</button>
      </div>
      <div id="weather-container"></div>
    </div>
  );
};

export default WeatherInfo;
