import React, { useState} from 'react';
import Filter from '../components/filter';
import useCountryData from '../utils/useCountryData'
import List from "../components/list";
import TableContainer from './table';
import Map from '../Map'
// import Map from '../heatmap'

export default function FilterContainer() {
  const countries = useCountryData()[0];
  const mapCountries = useCountryData()[1];
  const [countryInfo, setCountryInfo] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [mapCenter, setMapCenter] = useState([34.80746,-40.4796]);
  const [mapZoom, setMapZoom] = useState(3);

  const onCountryChange = async (event) => {
    // event.persist();
    const countryCode = event.target.value;
    console.log(event.target.value);
    console.log("selected countryCode", countryCode);
    console.log(mapCountries);

    setCountry(countryCode);
    const url = 
      countryCode === "globe" 
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      await fetch (url) 
        .then(res => res.json())
        .then((data)=> {
          setCountryInfo(data);
          const location = [
              data.countryInfo.lat,
              data.countryInfo.long
          ]
          console.log(location)
          setMapCenter(location);
          setMapZoom(4);
        });     
  };
  // console.log('country info', countryInfo)

    return (
      <>
        <Filter.Pane>
          <Filter.Heading>
            <Filter.Image src="https://cdn3.iconfinder.com/data/icons/coronavirus-12/64/pandemic-disease-virus-infection-coronavirus-incident--covid19-512.png" />
            <span style={{ color: "#cc0b0b" }}>Covid19-</span>Tracker
          </Filter.Heading>
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
        </Filter.Pane>
        <Filter>
          <List>
            <List.Frame>
              <List.Frame>
                <List.Title>{countryInfo.country}</List.Title>
                <List.Content>
                  <strong>Active Cases: </strong> {countryInfo.active}
                </List.Content>
                <List.Content>
                  <strong>Total Cases: </strong> {countryInfo.cases} (+
                  {countryInfo.todayCases})
                </List.Content>
                <List.Content>
                  <strong>Total Deaths: </strong> {countryInfo.deaths} (+
                  {countryInfo.todayDeaths})
                </List.Content>
                <List.Content>
                  <strong>Total Recovered: </strong> {countryInfo.recovered} (+
                  {countryInfo.todayRecovered})
                </List.Content>
              </List.Frame>
              <List.Frame>
                <List.Title>MOST INFECTED: BY COUNTRY</List.Title>
                <TableContainer />
                {/* <List.Content>total world statistics</List.Content> */}
              </List.Frame>
            </List.Frame>
          </List>

          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
          {/* <Map  /> */}

        </Filter>
      </>
    );
                  }
