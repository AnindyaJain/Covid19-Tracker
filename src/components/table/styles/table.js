import styled from "styled-components/macro";

export const Row = styled.div`
    display: flex;
    display-direction: row;
    justify-content: space-between;
`;

export const Container = styled.div`
    margin-top: 20px;
    overflow: scroll;
    height: 300px;
    color: #6a5d5d;
    & ${Row}: nth-child(odd) {
        background-color: #f3f2f8;
    }
    border: 3px #222;
`;

export const Cell = styled.div`
    padding: 0.5rem;
`;