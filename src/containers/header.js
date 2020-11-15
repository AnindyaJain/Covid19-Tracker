import React from "react";
import Header from '../components/header';
import useTotalNumbers from '../utils/useTotalNumbers';

export default function HeaderContainer() {
  const totalNumber = useTotalNumbers();
  return (
    <Header>
      <Header.Row>
        <Header.Column>
          <Header.Title>Confirmed</Header.Title>
          <Header.Number>{totalNumber.cases}</Header.Number>
        </Header.Column>
        <Header.Column>
          <Header.Title>Deaths</Header.Title>
          <Header.Number>{totalNumber.deaths}</Header.Number>
        </Header.Column>
        <Header.Column>
          <Header.Title>Recovered</Header.Title>
          <Header.Number>{totalNumber.recovered}</Header.Number>
        </Header.Column>
        <Header.Column>
          <Header.Title>Active</Header.Title>
          <Header.Number>{totalNumber.active}</Header.Number>
        </Header.Column>
        <Header.Column>
          <Header.Title>Critical</Header.Title>
          <Header.Number>{totalNumber.critical}</Header.Number>
        </Header.Column>
        <Header.Column>
          <Header.Title>Tests</Header.Title>
          <Header.Number>{totalNumber.tests}</Header.Number>
        </Header.Column>
      </Header.Row>
    </Header>
  );
}
