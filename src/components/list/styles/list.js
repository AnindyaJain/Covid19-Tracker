import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  height: auto;
  width: 25%;
  border: 3px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 25px;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
  text-align: center;
  padding: 20px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Content = styled.div`
  color: black;
  margin-bottom: 10px;
  margin-left: 20px;
  max-width: 670px;
  width: 100%;
  &:first-of-type {
    margin-top: 3em;
  }
`;