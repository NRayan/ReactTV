import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    gap: 1.5vw;

    @media(min-width:800px)
    {
        grid-template-columns: repeat(5,minmax(100px,1fr));
    }
`;