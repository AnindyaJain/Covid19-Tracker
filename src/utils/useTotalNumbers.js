import { useState, useEffect } from "react";

export default function useTotalNumbers() {
    const [totalNumber, setTotalNumber] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        console.log("Fetching Data");
        const data = await fetch("https://disease.sh/v3/covid-19/all")
          .then((res) => res.json())
          .then((data) => {
            setTotalNumber(data);
            setIsLoading(false);
          });
        }
        fetchData();
    }, []);

    return [totalNumber, isLoading];
    }
