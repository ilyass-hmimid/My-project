import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import './Appmétéo.css';

function Appmétéo() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async (city) => {
    try {
      const apiKey = 'VOTRE_CLE_API';  // Remplacez par votre clé API
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Ville non trouvée');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>Application Météo</h1>
      <SearchBar onSearch={getWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default Appmétéo;
