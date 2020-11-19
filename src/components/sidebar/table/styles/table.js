import styled from "styled-components/macro";

export const Row = styled.div`
  display: flex;
  display-direction: row;
  justify-content: space-between;
`;

export const Cell = styled.div`
  padding: 0.6rem;
`;

export const Container = styled.div`
  overflow: scroll;
  -webkit - scrollbar - track {
  background - color: #000000;}
  max-height: 75vh;
  color: rgb(255,227,46);
  & ${Row}: nth-child(odd) {
    background: rgb(153,26,43, 0.1);
  }
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  max-height: auto;
  color: #ffffff;
  border-radius: 3px;
  object-fit: cover;
  text-align: center;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

