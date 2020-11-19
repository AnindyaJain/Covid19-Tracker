import React from "react";
import { MapContainer as LeafletMap,TileLayer } from "react-leaflet";
import '../map/map.css';
import { mapLayer } from "./mapLayer";
import Zoom from "./zoom";

export default function Map({ countries, casesType, center, zoom }) {
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
          url= "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution= '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        {mapLayer(countries, casesType)}
      </LeafletMap>
    </div>
  );
}
