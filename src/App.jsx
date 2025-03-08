import React from "react";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Map from "./components/Map";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [selectedCoords, setSelectedCoords] = useState(null);

  function getForecast() {
    return {
      "forecast": [
        { "day": "Monday", "date": "2025-03-04", "high": 72, "low": 55 },
        { "day": "Tuesday", "date": "2025-03-05", "high": 75, "low": 58 },
        { "day": "Wednesday", "date": "2025-03-06", "high": 78, "low": 60 },
        { "day": "Thursday", "date": "2025-03-07", "high": 74, "low": 57 },
        { "day": "Friday", "date": "2025-03-08", "high": 71, "low": 54 },
        { "day": "Saturday", "date": "2025-03-09", "high": 69, "low": 52 },
        { "day": "Sunday", "date": "2025-03-10", "high": 73, "low": 56 }
      ]
    };
  }

  const forecastData = getForecast().forecast;

  return (
    <div className="app-container">
      <h1 className="title">7 DAY FORECAST</h1>
      <div id="map">
        <Map onLocationSelect={setSelectedCoords} />
      </div>
      {selectedCoords && (
        <p>Selected Coordinates: {selectedCoords[0]}, {selectedCoords[1]}</p>
      )}
      <div className="forecast-container">
        {forecastData.map((dayData, index) => (
          <WeatherCard
          key={index}
          day={dayData.day}
          high={dayData.high}
          low={dayData.low}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
