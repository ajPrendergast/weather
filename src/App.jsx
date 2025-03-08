import React from "react";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Map from "./components/Map";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [selectedCoords, setSelectedCoords] = useState(null);

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
