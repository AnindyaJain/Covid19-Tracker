import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px 20px;
  height: 10vh;
  margin-bottom: 20px;

  @media (max-width: 1174px) {
    display: none;
  }
`;

export const Column = styled.div`
  padding-top: 10px;
  border-bottom: 1px #F3F3F3 solid;
  border-left: 1px #F3F3F3 solid;
  box-shadow: 0 0 5px -4px ;
  border-radius: 5px;
  display: flex;
  object-fit: cover;
  flex-direction: column;
  text-align: center;
  &:hover {
    box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.5);
  }
  
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
  grid-gap: 20px;
  margin: 10px;

`;

export const Title = styled.span`
  font-family: Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua",
                Georgia, serif;
  font-size: 20px;
  font-weight: bold;
  color: #1B1B1B;
  margin-bottom: 10px;
`;

export const Number = styled.span`
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  border-radius: 4px;

`;
