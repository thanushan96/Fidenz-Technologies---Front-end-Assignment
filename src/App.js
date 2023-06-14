// app.js
import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      <Header />
      <WeatherInfo />
      <Footer />
    </div>
  );
}

export default App;
