import React from "react";
import Header from '../components/header';
import useTotalNumbers from '../utils/useTotalNumbers';
import LoaderContainer from "./loader";


const defaultValue = { data: "" };
export default function HeaderContainer() {
  const url = "https://disease.sh/v3/covid-19/all";
  const totalNumber = useTotalNumbers(url, defaultValue)[0];
  const dataOne = {
    stats: {
      "Confirmed": totalNumber.cases,
      "Recovered": totalNumber.recovered,
    }
  }
  const dataTwo = {
    stats: {
      "Active": totalNumber.active,
      "Critical": totalNumber.critical,
    }
  }
  const dataThree = {
    stats: {
      "Deaths": totalNumber.deaths,
      "Tests": totalNumber.tests,
    }
  }
  if(totalNumber !== undefined){
    return (
      <Header>
        <Header.Row>
          <Header.Column>
            {Object.keys(dataOne.stats).map((key, i) => (
              <Header.Item key={i}>
                <Header.Title key={i}>{key}</Header.Title>
                <Header.Number>{dataOne.stats[key]}</Header.Number>
              </Header.Item>
            ))}
          </Header.Column>
          <Header.Column>
            {Object.keys(dataTwo.stats).map((key, i) => (
              <Header.Item key={i}>
                <Header.Title key={i}>{key}</Header.Title>
                <Header.Number>{dataTwo.stats[key]}</Header.Number>
              </Header.Item>
            ))}
          </Header.Column>
          <Header.Column>
            {Object.keys(dataThree.stats).map((key, i) => (
              <Header.Item key={i}>
                <Header.Title key={i}>{key}</Header.Title>
                <Header.Number>{dataThree.stats[key]}</Header.Number>
              </Header.Item>
            ))}
          </Header.Column>
        </Header.Row>
      </Header>
    );
  } else {
    return <LoaderContainer datatest-id='loader-container'/>
  }
  

}; 

