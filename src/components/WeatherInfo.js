import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { citiesData } from '../data/citiesData';
import { processData } from '../constants/helper';
import { getCityCodes, generateUrl } from '../constants/apiHelper';



const WeatherInfo = () => {
  console.log('Component rendering!');

  const fetchWeatherData = async () => {
    const cityCodes = getCityCodes(citiesData);
    const url = generateUrl(cityCodes);

    try {
      const response = await fetch(url);
      const weatherData = await response.json();
      const weatherCards = processData(weatherData, citiesData);
      return weatherCards;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return [];
    }
  };

  useEffect(() => {
    console.log('Component is unmounting or condition changed!');
    fetchWeatherData().then(weatherCards => {
      const weatherContainer = document.getElementById('weather-container');
      ReactDOM.render(weatherCards, weatherContainer);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div id="weather-container"></div>
    </div>
  );
};

export default WeatherInfo;


