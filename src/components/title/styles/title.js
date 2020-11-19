import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px;
  height: 1vh;
  @media (max-width: 1174px) {
    align-items: center;
    margin: 0 auto;
    height: auto;
  }
`;

export const Heading = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  color: rgb(0,191,255);
  border-radius: 6px;
  @media (max-width: 1174px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    margin: 25px;
  }
`;

export const Image = styled.img`
  height: 90px;
  max-width: 90px;
  @media (max-width: 1174px) {
    height: 80px;
    max-width: 80px;
  }
`;
