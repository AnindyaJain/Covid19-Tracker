import React from 'react';
import Summary from '../components/summary';
import TableContainer from './table';
import LoaderContainer from './loader';

export default function SidebarContainer ({countryInfo}) {
    const isLoading = true;
    const info = {
      country: {
        "Today Cases": countryInfo.todayCases,
        "Today Recovered": countryInfo.todayRecovered,
        "Population": countryInfo.population,
        "Active per one million": countryInfo.activePerOneMillion,
      }
    };

    if (countryInfo.active) {
      return (
        <Summary>
          <Summary.Frame>
            <Summary.Title>{countryInfo.country}</Summary.Title>
            {Object.keys(info.country).map((key, i) => (
              <Summary.Content key={i}>
                <strong>{key}</strong>
                <span>{info.country[key]}</span>
              </Summary.Content>
            ))}
          </Summary.Frame>
          <TableContainer />
        </Summary>
      );
    } else {
      return (
        <Summary>
          <LoaderContainer isLoading = {isLoading} />
          <TableContainer />
        </Summary>
      );
    }
}