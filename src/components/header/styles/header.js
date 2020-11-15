import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  background-color: #f4f4f4;
  padding: 20px 20px;
  // width: 100%;
  height: 20 vh;
  flex-direction: column;
  
  border-bottom: 3px #16a596 solid;
  box-shadow: 0 0 8px -4px rgba(204, 102, 0, 0.5);
  
  @media (max-width: 1000px) {
    padding: 10px 10px;
    flex-direction: row;
  }
`;

export const Column = styled.div`
  padding-top: 10px;
  border-bottom: 1px #646464 solid;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  background-color: white;
  display: flex;
  object-fit: cover;
  flex-direction: column;
  text-align: center;
  &:hover {
    box-shadow: 4px -3px 8px -4px rgba(0, 0, 0, 0.5);;
  }
  
  @media (max-width: 1000px) {
    padding: 10px 10px;
    width: 100%;
`;

export const Row = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
  grid-gap: 20px;
  //   max-width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 10px;
  }
`;

export const Title = styled.span`
  font-family: Palatino, "Palatino LT STD", "Palatino Linotype", "Book Antiqua",
    Georgia, serif;
  font-size: 25px;
  font-weight: bold;
  color: #16a596;
  margin-bottom: 10px;
`;

export const Number = styled.span`
  font-size: 30px;
  background-color: #e6dedd;
  color: black;
  margin-bottom: 0px;
  border-bottom: 3px #16a596 solid;
  // box-shadow-bottom: 0 0 8px -4px rgba(123, 42, 20, 1);
  border-radius: 50px;

  &:hover {
    background: #d6d2c4;
  }
`;

export const Image = styled.img`
  
`;