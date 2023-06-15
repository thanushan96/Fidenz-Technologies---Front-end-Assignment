import React from 'react';
import CityCard from '../components/CityCard';

const processData = (weatherData, citiesData) => {
    const processedData = [];
    const cityCards = weatherData.list.map(cityWeather => {
    const cityCode = cityWeather.id.toString();
  
      if (!processedData.includes(cityCode)) {
        processedData.push(cityCode);
  
        const cityData = citiesData.List.find(city => city.CityCode === cityCode);
  
        return (
          <CityCard
            key={cityCode}
            cityCode={cityCode}
            cityData={cityData}
            cityWeather={cityWeather}
          />
        );
      }
  
      return null;
    });
  
    return cityCards;
  };
  

  export { processData };