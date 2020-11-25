import React from "react";
import useInfoByCountry from "../utils/useInfoByCountry";
import Table from '../components/table';

export default function TableContainer() {
  
  const countries = useInfoByCountry([]);
  return (
    <>
      <Table.Title>Live by Country</Table.Title>
      <Table>
        {countries.map((country) => (
          <Table.Row >
            <Table.Cell key={country.countryInfo.iso2}>{country.country}</Table.Cell>
            <Table.Cell key={country.cases}>
              <strong>{country.cases}</strong>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </>
  );
}
