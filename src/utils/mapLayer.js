import React from "react";
// import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import './mapLayer.css'

const casesTypeColors = {
  cases: {
    hex: "#ceb700",
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


export const prettyPrintStat = (stat) =>
  stat ? `+${(stat)}` : "+0";

export const mapLayer = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle 
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
          <div className="info-confirmed">
            Cases: {(country.cases)}
          </div>
          <div className="info-recovered">
            Recovered: {(country.recovered)}
          </div>
          <div className="info-deaths">
            Deaths: {(country.deaths)}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
