import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { citiesData } from '../data/citiesData';
import { apiKey, baseUrl, unitType } from '../constants/apiHelper';
import { processData } from '../constants/helpers';



const WeatherInfo = () => {
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
    fetchWeatherData()
      .then(weatherCards => {
        const weatherContainer = document.getElementById('weather-container');
        ReactDOM.render(weatherCards, weatherContainer);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  return (
    <div>
      <Header />
      
        
      <div id="weather-container"></div>
      
      <Footer />

    </div>
  );
};

export default WeatherInfo;


