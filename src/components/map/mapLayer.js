import React from "react";
import { Circle, Popup } from "react-leaflet";
import '../map/mapLayer.css';

const casesTypeColors = {
  cases: {
    hex: "#e60000",
    multiplier: 200,
  },
  recovered: {
    hex: "#49fd2e",
    multiplier: 800,
  },
  deaths: {
    hex: "#f56606",
    multiplier: 1600,
  },
};

export const mapLayer = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle 
      key={[country.countryInfo.lat, country.countryInfo.long]}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">Cases: {country.cases}</div>
          <div className="info-recovered">Recovered: {country.recovered}</div>
          <div className="info-deaths">Deaths: {country.deaths}</div>
        </div>
      </Popup>
    </Circle>
  ));
