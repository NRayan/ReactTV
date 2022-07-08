import styled from "styled-components";

export const Container = styled.div`
    width: 15vw;
    aspect-ratio: 0.7;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
`;