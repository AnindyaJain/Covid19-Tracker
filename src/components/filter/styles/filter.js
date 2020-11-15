import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 100%;
  margin: auto;
  // width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  // width: 80% 20%;
  @media (max-width: 1000px) {
    // width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Heading = styled.div`
  font-size: 70px;
  font-weight: bold;
  @media (max-width: 1000px) {
    font-size: 40px;
  }
`;

export const Select = styled.select`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin: 10px;
  width: 100%;
  // margin-right: 100px;
  // padding: 20px;
  width: 210px;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
  `;

export const Option = styled.option`
  background-color: white;
  color: black;
`;
