import React from 'react';
import SearchBar from '../components/SearchBar';
const Header = () => {
  return (
    <div className="header">
      <div className="weather">
        <img src='assets/cloud_icon.png' alt='' />
        <h1>Weather App</h1>
      </div>

      <SearchBar/>
    </div>
  );
};

export default Header;
