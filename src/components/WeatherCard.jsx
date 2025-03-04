import React from 'react'
import './weatherCard.css'
const WeatherCard = ({...props}) => {
  return (
    <>
      <div class="weather-card">
        <h2>{props.day}</h2>
        {/* <p class="date">Monday, March 3, 2025</p> */}
        <div class="weather-info">
            <img />
            <p class="temperature">High: 22°C | Low: 14°C</p>
            <p class="description">Partly Cloudy</p>
        </div>
      </div>
    </>
  )
}

export default WeatherCard