import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    margin: 0px 10px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;