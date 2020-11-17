import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #e1e1e1;
  width: 30%;
  height: auto;
  margin: 10px;
  border: 1px #f3f3f3 solid;
  border-radius: px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Frame = styled.div`
  // margin-bottom: 40px;
  // max-width: 30%;
  // &:hover {
  //   & ${Container} {
  //     display: none ;
  //     height: 20 vh;
  //   }
  // }
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: black;
  border-radius: 3px;
  object-fit: cover;
  text-align: center;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  font-size: 16px;
  color: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;
