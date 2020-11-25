import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 30%;
  height: 75vh;
  margin-top: 66px;
  margin-left: 10px;
  border-radius: px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  object-fit: cover;
  @media (max-width: 1174px) {
    width: 100%;
    margin-top: 30px;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
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
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const Frame = styled.div`
  display: block;
`;