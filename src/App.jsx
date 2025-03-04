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
        <WeatherCard day='Monday 01'/>
        <WeatherCard day='Tuesday 02'/>
        <WeatherCard day='Wednesday 03'/>
        <WeatherCard day='Thursday 04'/>
        <WeatherCard day='Friday 05'/>
        <WeatherCard day='Saturday 06'/>
        <WeatherCard day='Sunday 07'/>
      </div>
    </div>
  );
};

export default App;
