import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import "leaflet.fullscreen"; // Import Fullscreen Plugin
import "leaflet.fullscreen/Control.FullScreen.css"; // Import Fullscreen Button CSS
import L from "leaflet"; // Import Leaflet itself

const Map = ({ onLocationSelect }) => {
  const [position, setPosition] = useState([27.624, -82.6487]); // Default: Tampa

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const newPosition = [e.latlng.lat, e.latlng.lng];
        setPosition(newPosition);
        onLocationSelect(newPosition); // Send coordinates to parent
      },
    });

    return position ? <Marker position={position}></Marker> : null;
  }

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
      fullscreenControl={true} // Enable Fullscreen Button
      whenCreated={(map) => {
        L.control.fullscreen({ position: "topright" }).addTo(map); // Add Fullscreen Button

        // Listen for fullscreen mode changes
        map.on("fullscreenchange", function () {
          if (map.isFullscreen()) {
            console.log("Entered Fullscreen");
          } else {
            console.log("Exited Fullscreen");
          }
        });
      }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="© Esri, Maxar, Earthstar Geographics"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
