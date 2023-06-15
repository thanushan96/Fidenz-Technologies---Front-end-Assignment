const apiKey = process.env.REACT_APP_API_KEY || '5a860fd4bdc18e1897feaaf0c8a30a67' ;
const baseUrl = 'http://api.openweathermap.org/data/2.5/group';
const unitType = 'metric';


export const getCityCodes = (citiesData) => {
    return citiesData.List.map(city => city.CityCode);
  };
  
  export const generateUrl = (cityCodes) => {
    return `${baseUrl}?id=${cityCodes.join(',')}&units=${unitType}&appid=${apiKey}`;
  };
  



export { apiKey, baseUrl, unitType };
