import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { mapLayer } from './utils/mapLayer'


function Map({countries, casesType, center, zoom}) {
  return (
    <div className="map">
      {/* <p>{center}</p>
      <p>{zoom}</p> */}
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapLayer(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
