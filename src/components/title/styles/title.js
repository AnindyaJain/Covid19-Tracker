import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  // margin-top: 20px;
  @media (max-width: 117400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  color: #f3f3f3;
  border-radius: 6px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif, Georgia,
    serif;
  @media (max-width: 1174px) {
    font-size: 20px;
    // margin-top: 35px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    margin-top: 45px;
  }
`;

export const Image = styled.img`
  max-height: 80px;
  max-width: 90px;
  @media (max-width: 1174px) {
    height: 30px;
    max-width: 30px;
    display: none;
  }
`;
