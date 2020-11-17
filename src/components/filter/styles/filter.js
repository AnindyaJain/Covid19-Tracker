import styled from 'styled-components/macro';


export const Option = styled.option`
  background-color: #f2efea;
  color: black;
  overflow: hidden;
  box-border: 0;
  &:hover {
    background-color: #c7beac;
  }
`;

export const Select = styled.select`
  font-family: Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua",
    Georgia, serif;
  font-size: 20px;
  height: max-content;
  width: 310px;
  padding: 5px;
  align-item: center;
  margin:  0px 30px;
  margin-top: 10px;
  cursor: pointer;
  outline: 0px;
  border-radius: 15px;
  background-color: #1b1b1b;
  color: #f3f3f3;
  @media (max-width: 1174px) {
    font-size: 14px;
    width: 210px;
    align-items: center;
  }
`;


