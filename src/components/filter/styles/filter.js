import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: grey;
  padding: 10px;
  width: 150px;
  align-items: center;
  top: 32px;
  right: 10px;
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Button = styled.div`
  height: auto;
  font-weight: bold;
  font-size: 25px;
  margin-botton: 5px;
  align-items: center;
  background-color: grey;
  background-size: contain;
  border: 0;
  width: aut;
  height: 32px;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;

  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    border-bottom-color: 91d36b;
    background-color: none;
    display: flex;
    font-weight: normal;
    font-size: 15px;
    flex-direction: column;
  }
`;

export const Text = styled.span`
  background-size: contain;
  border: 0;
  width: auto;
  height: 32px;
  cursor: pointer;
  
`;