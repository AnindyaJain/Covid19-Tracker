import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 100%;
  margin-top: 10px;


  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px
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
  color: #064d8d;
  font-family: font-family: Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua",
    Georgia, serif;
    @media (max-width: 1000px) {
    font-size: 40px;
  }
`;

export const Option = styled.option`
  background-color: #f2efea;
  color: black;
  border: 0px;
  nth-child (odd) {
    background-color: white;
  }
`;


export const Select = styled.select`
  margin: 25px;
  margin-top: 65px;
  height: max-content;
  padding: 10px;
  width: 100%;
  // margin-right: 100px;
  // padding: 20px;
  width: 210px;
  font-size: 20px;
  border-radius: 5px;
  border-color: #16a596;
  background-color: white;
  color: #16a596;
  font-weight: bold;
  & ${Option}: nth-child {
    background-color: white;
  }
`;

export const Image = styled.img`
max-height: 100px;
margin-top: 15px;
margin-right: 15px; 
`;

