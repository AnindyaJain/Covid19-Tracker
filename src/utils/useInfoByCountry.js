import { useState, useEffect } from "react";
import { SortCountry } from "./sort";

export default function useInfoByCountry() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      async function fetchTableData() {
        const data = await fetch("https://disease.sh/v3/covid-19/countries")
          .then((res) => res.json())
          .then((data) => {
            const sortedCountry = SortCountry(data);
            setTableData(sortedCountry);
          });
      }
      fetchTableData();
    }, []);
    return tableData;
}
