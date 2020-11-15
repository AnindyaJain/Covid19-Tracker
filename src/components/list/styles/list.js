import styled from "styled-components/macro";

export const Container = styled.div`
  // display: flex;
  // height: auto;
  // max-width: 40%;
  // border: 3px solid #222;
  background-color: white;
  width: 30%;
  height: auto;
  margin: 10px;
  border: 1px lightgray solid;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  object-fit: cover;

  `;

export const Frame = styled.div`
  // margin-bottom: 40px;
  // max-width: 30%;
`;

export const Title = styled.h1`
  font-size: 20px;
  // line-height: 1.1;
  margin-top: 10px;
  // margin-bottom: 10px;
  color: black;
  background-color: #f4f4f4;
  border-left: 6px solid #16a596;
  // border-bottom: 4px solid #16a596;
  border-radius: 10px;
  // max-width: 30%;
  object-fit: cover;
  text-align: center;
  padding: 20px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Content = styled.div`
  font-size: 16px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;;
  margin: 20px;
  width: auto;
  &:first-of-type {
    margin-top: 1em;
  }
`;