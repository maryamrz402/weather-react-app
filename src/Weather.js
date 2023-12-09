import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import { SpinnerCircular } from 'spinners-react';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon:response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitychange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "520fod794c0bd8f40170aa28e33at72e";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
                onChange={handleCitychange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();

    return (
      <div className="spinner">
    <SpinnerCircular size={100} thickness={200} speed={100} color="8ed6ff" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
    
    );
  }
}