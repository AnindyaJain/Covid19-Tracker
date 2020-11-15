import { useState, useEffect } from "react";


export default function useCountryData() {
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);

    useEffect(() => {
        async function fetchCountriesData() {
            console.log("Fetching Data");
            const data = await fetch("https://disease.sh/v3/covid-19/countries")
                .then((res) => res.json())
                .then((data) => {
                    setMapCountries(data);
                    // console.log(data);
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2 }))
                    setCountries(countries);
                    
                });
                console.log(mapCountries);
                
                
        }
        fetchCountriesData();
    }, [])
    
    return [countries, mapCountries];
}
