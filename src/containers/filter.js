import React, { useState} from 'react';
import Filter from '../components/filter';
import useCountryData from '../utils/useCountryData'
import List from "../components/list";
import TableContainer from './table';
import Map from '../Map'

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
      countryCode === "worldwide" 
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
          <Filter.Heading>Covid19-Tracker</Filter.Heading>
          <Filter.Select defaultValue="Worldwide" onChange={onCountryChange} value={country}>
            <Filter.Option  value="worldwide">
              Worldwide
            </Filter.Option>
            {countries.map((country) => (
              <Filter.Option value={country.value} key={country.name}>{country.name}</Filter.Option>
            ))}
          </Filter.Select>
        </Filter.Pane>
        <Filter>
          <List>
            <List.Frame>
              <List.Frame>
                <List.Title>COUNTRY: {countryInfo.country}</List.Title>
                <List.Content>
                  <strong>Active:</strong> {countryInfo.active}
                </List.Content>
                <List.Content>
                  <strong>Cases:</strong> {countryInfo.cases} (+
                  {countryInfo.todayCases})
                </List.Content>
                <List.Content>
                  <strong>Deaths:</strong> {countryInfo.deaths} (+
                  {countryInfo.todayDeaths})
                </List.Content>
                <List.Content>
                  <strong>Recovered:</strong> {countryInfo.recovered} (+
                  {countryInfo.todayRecovered})
                </List.Content>
              </List.Frame>
              <List.Frame>
                <List.Title>LIVE BY COUNTRY</List.Title>
                <TableContainer />
                {/* <List.Content>total world statistics</List.Content> */}
              </List.Frame>
            </List.Frame>
          </List>
                  
          <Map countries={mapCountries} center={mapCenter} zoom={mapZoom} />
        </Filter>
      </>
    )
                  }
