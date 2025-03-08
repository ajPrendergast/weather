import React from "react";
import "./weatherCard.css";
import react from '../assets/react.svg'

const WeatherCard = ({ ...props }) => {
  return (
    <>
      <div class="weather-card">
        <h2>{props.day}</h2>
        <div class="weather-info">
          <img src={react}/>
          <p class="temperature">
            High: {props.high}°F | Low: {props.low}°F
          </p>
          <p class="description">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
