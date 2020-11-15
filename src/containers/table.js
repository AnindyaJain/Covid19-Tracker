import React from "react";
import useInfoByCountry from "../utils/useInfoByCountry";
import Table from '../components/table'

export default function TableContainer() {
  
  const countries = useInfoByCountry([]);
  return (
    <Table>
        {countries.map((country) =>(
            <Table.Row>
                <Table.Cell>{country.country}</Table.Cell>
                <Table.Cell>
                    <strong>{country.cases}</strong>
                </Table.Cell>
            </Table.Row>
        ))}
    </Table>
  );
}
