import React from "react";
import { MapContainer as LeafletMap,TileLayer } from "react-leaflet";
import '../map/map.css';
import { mapLayer } from "./mapLayer";
import Zoom from "./zoom";

export default function Map({ countries, casesType, center, zoom }) {
  // console.log("loc", center, typeof center[0]);

  return (
    <div className="map">
      <LeafletMap
        center={{
          lat: center[0],
          lng: center[1],
        }}
        zoom={zoom}
      >
        <Zoom center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapLayer(countries, casesType)}
      </LeafletMap>
    </div>
  );
}
