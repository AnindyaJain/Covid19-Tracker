import React, { useState } from "react";
import Filter from "../components/filter";
import HeaderContainer from "../containers/header";
import TitleContainer from "../containers/title";
import SummaryContainer from '../containers/sidebar';
import useCountryData from '../utils/useCountryData';
import Flexbox from '../components/flexbox';
import Map from '../components/map'
import LoaderContainer from "../containers/loader";


export default function MainPage() {

  /* DATA OF SELECTED COUNTRY */
  const countries = useCountryData()[0];
  const [country, setCountry] = useState("worldwide");
  /* DATA SUMMARY COUNTRYWISE */
  const [countryInfo, setCountryInfo] = useState([]);
  /*  DATA TO PLOT MAP */
  const mapCountries = useCountryData()[1];
  const [mapCenter, setMapCenter] = useState([34, -40]);
  const [mapZoom, setMapZoom] = useState(3);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    /* FETCH DATA FOR SELECTED COUNTRY */
    const url =
      countryCode === "globe"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
        const location = [
          Number(`${data.countryInfo.lat}.1`),
          Number(`${data.countryInfo.long}.1`),
        ];
        setMapCenter(location);
        setMapZoom(4.5);
      }); 
  };
  

  return (
    <Flexbox>
      <Flexbox.Column>
        <HeaderContainer />
        <Flexbox.Column style={{alignItems: "center"}}>
          <TitleContainer />
          <LoaderContainer />
          <Filter.Select
            defaultValue="globe"
            onChange={onCountryChange}
            value={country}
          >
            <Filter.Option value="globe">Globe</Filter.Option>
            {countries.map((country) => (
              <Filter.Option value={country.value} key={country.name}>
                {country.name}
              </Filter.Option>
            ))}
          </Filter.Select>
        </Flexbox.Column>
      </Flexbox.Column>
      <Flexbox.Row>
        <SummaryContainer countryInfo={countryInfo} />
        <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
      </Flexbox.Row>
    </Flexbox>
  );
}

