import styled from 'styled-components/macro';

export const Option = styled.option`
  background-color: rgba(211,211,211);
  color: black;
  border: none;
  overflow: hidden;
  &:hover {
    background-color: #ffffff;
  }
`;

export const Select = styled.select`
  font-size: 20px;
  font-weight: bold;
  height: max-content;
  width: 310px;
  padding: 10px;
  border: 1px rgb(0,191,255) solid;
  align-item: center;
  margin: 0 0 0 auto;
  cursor: pointer;
  outline: 0px;
  background-color: rgb(0,191,255, 0);
  color: rgb(0,191,255);
  @media (max-width: 1174px) {
    font-size: 14px;
    width: 210px;
    align-items: center;
  }
`;


