import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weather, showWeather] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    showWeather(
      <div className="conditions">
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}ºC</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)}kmph</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather"
            />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      {weather}
    </div>
  );
}
