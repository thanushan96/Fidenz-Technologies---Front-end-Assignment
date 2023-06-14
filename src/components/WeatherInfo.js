import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { citiesData } from '../data/citiesData';
import { apiKey, baseUrl, unitType } from '../constants/apiHelper';
import { processData } from '../constants/helper';



const WeatherInfo = () => {
  console.log('Component rendering!');
  const fetchWeatherData = async () => {
    const cityCodes = citiesData.List.map(city => city.CityCode);
    const url = `${baseUrl}?id=${cityCodes.join(',')}&units=${unitType}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const weatherData = await response.json();
      return processData(weatherData, citiesData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return [];
    }
  };

  


  useEffect(() => {
    console.log('Component is unmounting or condition changed!');
    fetchWeatherData()
      .then(weatherCards => {
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



// change below
