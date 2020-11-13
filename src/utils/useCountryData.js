import { useState, useEffect } from "react";


export default function useCountryData() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountriesData() {
            console.log("Fetching Data");
            const data = await fetch("https://disease.sh/v3/covid-19/countries")
                .then((res) => res.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2 }))
                    setCountries(countries);
                });
        }
        fetchCountriesData();
    }, [])
    
    return countries;
}
