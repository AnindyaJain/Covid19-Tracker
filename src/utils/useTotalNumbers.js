import { useState, useEffect } from "react";

export default function useTotalNumbers(url, defaultValue=[]) {
    const [totalNumber, setTotalNumber] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
        const data = await fetch(url)
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
