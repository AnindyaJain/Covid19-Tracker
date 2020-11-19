import styled from "styled-components/macro";

export const Container = styled.div`
  margin-bottom: 50px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;  
  @media (max-width: 1174px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-right: 10px;
`;