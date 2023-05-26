// Step 1: Extract CityCode values from cities.json data
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

// Step 2: Make API calls to openweathermap.org
const apiKey = '5a860fd4bdc18e1897feaaf0c8a30a67';
const baseUrl = 'http://api.openweathermap.org/data/2.5/group';
const unitType = 'metric';

const url = `${baseUrl}?id=${cityCodes.join(',')}&units=${unitType}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(weatherData => {
    // Step 3: Process the weather data and populate the UI
    const weatherContainer = document.getElementById('weather-container');

    weatherData.list.forEach((cityWeather, index) => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');

      const cityName = document.createElement('div');
      cityName.classList.add('city-name');
      cityName.textContent = citiesData.List[index].CityName;

      const cityTemp = document.createElement('div');
      cityTemp.classList.add('city-temp');
      cityTemp.textContent = `Temperature: ${cityWeather.main.temp} °C`;

      const cityStatus = document.createElement('div');
      cityStatus.classList.add('city-status');
      cityStatus.textContent = `Weather: ${cityWeather.weather[0].description}`;

      cityCard.appendChild(cityName);
      cityCard.appendChild(cityTemp);
      cityCard.appendChild(cityStatus);

      weatherContainer.appendChild(cityCard);
    });
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
