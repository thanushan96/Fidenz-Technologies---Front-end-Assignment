const getWeatherIconClass = (condition) => {
    switch (condition) {
      case 'Broken Clouds':
        return 'weather-icon-broken-clouds';
      case 'Clear':
        return 'weather-icon-clear-sky';
      case 'Few Clouds':
        return 'weather-icon-few-clouds';
      case 'Rain':
        return 'weather-icon-rain';
      case 'Mist':
        return 'weather-icon-mist';
      case 'Clouds':
        return 'weather-icon-clouds';
      default:
        return '';
    }
  };

  export { getWeatherIconClass };

