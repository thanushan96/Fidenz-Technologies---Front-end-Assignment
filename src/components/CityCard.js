import React from 'react';
import { formatDate } from '../utils/dateUtils';
import { formatTime } from '../utils/timeUtils';
import { getWeatherIconClass } from '../utils/weatherUtils';

const CityCard = ({ cityCode, cityData, cityWeather }) => {
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
          {cityWeather.wind.speed} m/s {cityWeather.wind.deg} Degree
        </div>
        <div className="city-sunrise">
          <p>Sunrise: {formatTime(cityWeather.sys.sunrise)}</p>
          <p>Sunset: {formatTime(cityWeather.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
