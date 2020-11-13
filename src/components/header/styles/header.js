import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  background-color: #907163;
  padding: 10px 10px;
  //   min-width: 100%;
  height: 20 vh;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
  grid-gap: 15px;
  //   max-width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0px;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  //   font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const Number = styled.span`
  font-size: 30px;
  color: black;
  background-color: white;
  margin-bottom: 0px;
`;
