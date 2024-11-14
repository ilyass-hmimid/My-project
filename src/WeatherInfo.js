import React from 'react';

function WeatherInfo({ weather }) {
  return (
    <div className="weather-info">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Température : {weather.main.temp} °C</p>
      <p>Humidité : {weather.main.humidity} %</p>
      <p>Vent : {weather.wind.speed} m/s</p>
      <p>Description : {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
