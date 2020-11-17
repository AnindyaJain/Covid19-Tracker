import React from  'react';
import Title from '../components/title'

export default function TitleContainer () {
    return (
      <Title>
        <Title.Image src="https://cdn2.iconfinder.com/data/icons/coronavirus-15/1024/coronavirus-128.png" />
        <Title.Heading>
          <span style={{ color: "#c10000", backgroundColor: "#f3f3f3" }}>
            Covid19
          </span>
          <span style={{ color: "#000000", backgroundColor: "#e1e1e1", borderRadius: "5px"}}>
            Tracker</span>
        </Title.Heading>
      </Title>
    );
}