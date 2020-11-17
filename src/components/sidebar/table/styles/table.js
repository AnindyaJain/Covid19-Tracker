import styled from "styled-components/macro";

export const Row = styled.div`
  display: flex;
  display-direction: row;
  justify-content: space-between;
`;

export const Container = styled.div`
  // margin-top: 20px;
  overflow: scroll;
  height: 300px;
  color: #1b1b1b;
  & ${Row}: nth-child(odd) {
    background-color: #f3f3f3;
  }
  & ${Row}: nth-child(even) {
    background-color: #e1e1e1;
  }
  border: 3px #222;
`;

export const Cell = styled.div`
  padding: 0.6rem;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  max-height: auto;
  color: black;
  border-radius: 3px;
  object-fit: cover;
  text-align: center;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;