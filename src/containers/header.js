import React from "react";
import Header from '../components/header';
import useTotalNumbers from '../utils/useTotalNumbers';

export default function HeaderContainer() {
  const totalNumber = useTotalNumbers()[0];
  const data = {
    stats: {
      "Confirmed": totalNumber.cases,
      "Active": totalNumber.active,
      "Deaths": totalNumber.deaths,
      "Recovered": totalNumber.recovered,
      "Critical": totalNumber.critical,
      "Tests": totalNumber.tests
    }
  };
  return (
    <Header>
      <Header.Row>
        {Object.keys(data.stats).map((key, i) => (
          <Header.Column>
            <Header.Title key={i}>{key}</Header.Title>
            <Header.Number>{data.stats[key]}</Header.Number>
          </Header.Column>
        ))}
      </Header.Row>
    </Header>
  );
}
