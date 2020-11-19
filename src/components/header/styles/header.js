import styled from "styled-components/macro";

export const Container = styled.div`
  aligh-items: center;
  width: 100%;
  @media (max-width: 1174px) {
    // width: 100%;
  }
`;

export const Item = styled.div`  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px 0;
  background: rgba(127,255,0, 0.1);
  width: 100%;
  &:hover {
    box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 1);
  }
  @media (max-width: 1174px) {
    flex-direction: column;    
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 10px;
  margin: 5px;  
  & ${Item}: nth-child(even) {
    background: rgba(255,20,147, 0);
    width: 80%;
    margin: 0 auto;
    transition: 0.4s;
    &: hover {
      transition: 0.4s;
      width: 100%
    }
  }
  @media (max-width: 1174px) {
    width: auto;
    margin: 0;
    padding: 0px;
    & ${Item}: nth-child(even) {
      width: auto;
      }
  }
`;

export const Number = styled.span`
  font-size: 20px;
  color: rgb(173, 255, 47);
  padding: 10px;
  text-align: center;  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column; 

  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  padding: 10px;
  min-width: 40%;
  @media (max-width: 1174px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;


