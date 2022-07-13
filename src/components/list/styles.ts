import styled from "styled-components";

type containerProps =
    {
        columnQTD: number
    }

export const Container = styled.div<containerProps>`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ columnQTD }) => `repeat(${columnQTD}, 1fr)`};
    gap: 1.5vw 
`;