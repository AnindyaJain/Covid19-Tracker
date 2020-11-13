import React, { useState} from 'react';
import Filter from '../components/filter'
import useCountryData from '../utils/useCountryData'

export default function FilterContainer() {
  const countries = useCountryData();
  const [country, setCountry] = useState("worldwide");

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("yea", countryCode);
    setCountry(countryCode);
  };

    return (
      <Filter>
        <h1>Covid19-Tracker</h1>
        <Filter.Group>
          <Filter.Button>
            <Filter.Group>
              <Filter.Text value="worldwide">Worldwide</Filter.Text>
            </Filter.Group>
            <Filter.Dropdown onClick={onCountryChange} value={country}>
              {countries.map((country) => (
                <Filter.Group>
                  <Filter.Text value={country.value} key={country.value}>
                    {country.name}
                  </Filter.Text>
                </Filter.Group>
              ))}
            </Filter.Dropdown>
          </Filter.Button>
        </Filter.Group>
      </Filter>
    );
}